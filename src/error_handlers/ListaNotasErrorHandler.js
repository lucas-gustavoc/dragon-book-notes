import React from 'react'
import Language from '../contexts/Language'

class ListaNotasErrorHandler extends React.Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // some tool to log the errors.
    }

    render() {
        if (this.state.hasError) {
            return (
                <Language.Consumer>
                    {context => {
                        const msg = (context.language === 'pt-br') ?
                                    'Houve um erro na listagem de notas.' :
                                    'There\'s been an error listing the notes.'
                        return <p>{msg}</p>
                    }}
                </Language.Consumer>
            )
        }

        return this.props.children
    }

}

export default ListaNotasErrorHandler