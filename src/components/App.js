import React from 'react'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'

// [ ] Implementar o lastEditedAt
// [ ] Implementar validação para nota vazia

class App extends React.Component {
    
    state = {
        notas: []
    }

    criarNovaNota = (description, tags) => ({
        description,
        tags,
        createdAt: new Date(),
        lastEditedAt: new Date()
    })

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
        this.setState(prev => ({ notas }))
    }
    
    render() {
        return (
            <div>
                <AddNota handleAddNota={this.handleAddNota}/>
                <ListaNotas
                    notas={this.state.notas}
                    handleDeleteNote={this.handleDeleteNote}
                    handleEditNote={this.handleEditNote}
                />
            </div>
        )
    }
}

export default App