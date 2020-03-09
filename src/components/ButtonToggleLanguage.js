import React from 'react'
import Language from '../contexts/Language'

// Este componente é um botão utilizado para alterar a língua do app
// em qualquer momento da aplicação, sem necessidade de se seguir u-
// hierarquia específica. Entretanto, é possível fazer essa mesma a-
// lteração por meio de uma alteração direta do state do componente
// que alimenta o Language.Provider

const ButtonToggleLanguage = props => (
    <Language.Consumer>
        {({language, toggleLanguage}) => (
            <button onClick={toggleLanguage}>
                {(language === 'pt-br') ? 'en-us' : 'pt-br'}
            </button>
        )}
    </Language.Consumer>
)

export default ButtonToggleLanguage