import React from 'react'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'
import AddNotaErrorHandler from '../error_handlers/AddNotaErrorHandler'
import ListaNotasErrorHandler from '../error_handlers/ListaNotasErrorHandler'
import PageTitle from './PageTitle'

// ***** ACCEPTABLE PROPS *****
// bookName [string]: The book's name.

class BookNotesPage extends React.Component {

    state = {
        notas: [],
        lastEditedAt: new Date()
    }

    criarNovaNota = (description, tags) => {
        const dataAtual = new Date()
        return {
            description,
            tags,
            createdAt: dataAtual,
            lastEditedAt: dataAtual
        }
    }

    componentDidMount() {
        const localData = localStorage.dragonBookNotesData
        const bookId = this.props.match.params.id

        if (localData && bookId) {
            const JSONData = JSON.parse(localData)

            if (JSONData.books[bookId]) {
                this.setState(prev => ({
                    notas: JSONData.books[bookId].notes
                }))
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.lastEditedAt !== prevState.lastEditedAt) {
            const localData = localStorage.dragonBookNotesData
            const bookId = this.props.match.params.id

            if (localData && bookId) {
                const JSONData = JSON.parse(localData)

                if (JSONData.books[bookId]) {
                    JSONData.books[bookId].notes = this.state.notas
                    localStorage.dragonBookNotesData = JSON.stringify(JSONData)
                }
            }
        }
    }

    handleAddNota = (description, tags) => {
        const notas = this.state.notas
        notas.unshift(this.criarNovaNota(description, tags))
        this.setState(prev => ({ notas, lastEditedAt: new Date() }))
    }

    handleDeleteNote = (noteIndex) => {
        const notas = this.state.notas
        notas.splice(noteIndex, 1)
        this.setState(prev => ({ notas, lastEditedAt: new Date() }))
    }

    handleEditNote = (description, tags, noteIndex) => {
        const notas = this.state.notas
        notas[noteIndex].description = description
        notas[noteIndex].tags = tags
        notas[noteIndex].lastEditedAt = new Date()
        this.setState(prev => ({ notas, lastEditedAt: new Date() }))
    }
    
    render() {
        // console.log(this.props.match.params)
        return (
            <div>
                <PageTitle is={this.props.bookName} subtitle="Entendendo os fenômenos por trás da sorte."/>
                <AddNotaErrorHandler>
                    <AddNota handleAddNota={this.handleAddNota}/>
                </AddNotaErrorHandler>
                <ListaNotasErrorHandler>
                    <ListaNotas
                        notas={this.state.notas}
                        handleDeleteNote={this.handleDeleteNote}
                        handleEditNote={this.handleEditNote}
                    />
                </ListaNotasErrorHandler>
            </div>
        )
    }

}



// Editar título do livro dinamicamente
// Colocar um botão de voltar





BookNotesPage.defaultProps = {
    bookName: ''
}

export default BookNotesPage