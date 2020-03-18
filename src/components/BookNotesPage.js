import React from 'react'
import { Link } from 'react-router-dom'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'
import AddNotaErrorHandler from '../error_handlers/AddNotaErrorHandler'
import ListaNotasErrorHandler from '../error_handlers/ListaNotasErrorHandler'
import PageTitle from './PageTitle'
import Language from '../contexts/Language'


class BookNotesPage extends React.Component {

    state = {
        notas: [],
        lastEditedAt: new Date(),
        bookName: '',
        bookAuthor: ''
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
                    notas: JSONData.books[bookId].notes,
                    bookName: JSONData.books[bookId].bookName,
                    bookAuthor: JSONData.books[bookId].bookAuthor
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
                <Language.Consumer>
                    {context => (
                        <React.Fragment>
                            <Link to="/">{(context.language === 'pt-br') ? '< Voltar' : '< Back'}</Link>
                        </React.Fragment>
                    )}
                </Language.Consumer>
                <PageTitle is={this.state.bookName} subtitle={this.state.bookAuthor}/>
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

BookNotesPage.defaultProps = {
    bookName: ''
}

export default BookNotesPage