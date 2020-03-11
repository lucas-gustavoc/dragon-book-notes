import React from 'react'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'
import AddNotaErrorHandler from '../error_handlers/AddNotaErrorHandler'
import ListaNotasErrorHandler from '../error_handlers/ListaNotasErrorHandler'
import PageTitle from './PageTitle'

// ***** ACCEPTABLE PROPS *****
// bookName [string]: The book's name.

class BookNotesPage extends React.Component {

    toggleLanguage = () => {
        this.setState(prev => ({
            language: (prev.language === 'pt-br') ? 'en-us' : 'pt-br'
        }))
    }

    state = {
        notas: []
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

    handleAddNota = (description, tags) => {
        const notas = this.state.notas
        notas.unshift(this.criarNovaNota(description, tags))
        this.setState(prev => ({ notas }))
    }

    handleDeleteNote = (noteIndex) => {
        const notas = this.state.notas
        notas.splice(noteIndex, 1)
        this.setState(prev => ({ notas }))
    }

    handleEditNote = (description, tags, noteIndex) => {
        const notas = this.state.notas
        notas[noteIndex].description = description
        notas[noteIndex].tags = tags
        notas[noteIndex].lastEditedAt = new Date()
        this.setState(prev => ({ notas }))
    }
    
    render() {
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

BookNotesPage.defaultProps = {
    bookName: ''
}

export default BookNotesPage