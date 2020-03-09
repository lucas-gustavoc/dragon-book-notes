import React from 'react'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'
import ButtonToggleLanguage from './ButtonToggleLanguage'
import Language from '../contexts/Language'

class App extends React.Component {

    toggleLanguage = () => {
        this.setState(prev => ({
            language: (prev.language === 'pt-br') ? 'en-us' : 'pt-br'
        }))
    }

    state = {
        notas: [],
        language: 'en-us',
        toggleLanguage: this.toggleLanguage
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
                <Language.Provider value={{ 
                    language: this.state.language, 
                    toggleLanguage: this.state.toggleLanguage 
                }}>
                    <ButtonToggleLanguage/>
                    <AddNota handleAddNota={this.handleAddNota}/>
                    <ListaNotas
                        notas={this.state.notas}
                        handleDeleteNote={this.handleDeleteNote}
                        handleEditNote={this.handleEditNote}
                    />
                </Language.Provider>
            </div>
        )
    }
}

export default App