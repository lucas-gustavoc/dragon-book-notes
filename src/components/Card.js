import React from 'react'

// Componente estilizado. Reusabilidade baixa.

const Card = props => (
    <div className="row no-padding">
        <div className="col-12">
            <div className="card">
                {props.children}
            </div>
        </div>
    </div>
)

export default Card