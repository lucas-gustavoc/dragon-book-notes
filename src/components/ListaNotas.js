import React from 'react'
import Nota from './Nota'

// ***** ACCEPTABLE PROPS *****
// notas [array<Nota>]: List of notes to render

const ListaNotas = props => {
    return (
        <div>
            {props.notas.map((nota, i) => 
                <Nota 
                    key={i}
                    description={nota.description}
                    tags={nota.tags}
                    createdAt={nota.createdAt}
                />
            )}
        </div>
    )
}

ListaNotas.defaultProps = {
    notas: []
}

export default ListaNotas