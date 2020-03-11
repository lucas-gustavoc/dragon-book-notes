import React from 'react'
import Nota from './Nota'

// ***** ACCEPTABLE PROPS *****
// notas [array<Nota>]: List of notes to render
// handleDeleteNote [function]: Function called when some note was deleted
// handleEditNote [function]: Function called when some note was edited

class ListaNotas extends React.Component {

    handleDeleteNote = (noteIndex) => {
        if (this.props.handleDeleteNote) this.props.handleDeleteNote(noteIndex)
    }

    handleEditNote = (description, tags, noteIndex) => {
        if (this.props.handleEditNote) this.props.handleEditNote(description, tags, noteIndex)
    }

    render() {
        
        return (
            <div>
                {this.props.notas.map((nota, i) => 
                    <Nota 
                        key={i}
                        index={i}
                        description={nota.description}
                        tags={nota.tags}
                        createdAt={nota.createdAt}
                        lastEditedAt={nota.lastEditedAt}
                        deleteNote={this.handleDeleteNote}
                        editNote={this.handleEditNote}
                    />
                )}
            </div>
        )
    }

}

ListaNotas.defaultProps = {
    notas: []
}

export default ListaNotas