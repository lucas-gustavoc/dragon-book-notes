import React from 'react'
import Nota from './Nota'
import EditarNota from './EditarNota'

class App extends React.Component {
    
    state = {}
    
    render() {
        return (
            <div>
                <EditarNota/>
                <Nota/>
                <Nota/>
                <Nota/>
            </div>
        )
    }
}

export default App