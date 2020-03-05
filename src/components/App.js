import React from 'react'
import Nota from './Nota'
import AddNota from './AddNota'
import ListaNotas from './ListaNotas'

class App extends React.Component {
    
    state = {
        notas: []
    }

    criarNovaNota = (description, tags) => ({
        description,
        tags,
        createdAt: new Date()
    })

    handleAddNota = (description, tags) => {
        this.setState(prev => ({
            notas: this.state.notas.concat(this.criarNovaNota(description, tags))
        }))
    }
    
    render() {
        return (
            <div>
                <AddNota handleAddNota={this.handleAddNota}/>
                <ListaNotas notas={this.state.notas}/>
            </div>
        )
    }
}

export default App