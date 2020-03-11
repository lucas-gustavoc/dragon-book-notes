import React from 'react'
import Language from '../contexts/Language'
import ButtonToggleLanguage from './ButtonToggleLanguage'
import BookNotesPage from './BookNotesPage'
import BooksPage from './BooksPage'

class App extends React.Component {

    toggleLanguage = () => {
        this.setState(prev => ({
            language: (prev.language === 'pt-br') ? 'en-us' : 'pt-br'
        }))
    }

    state = {
        language: 'en-us',
        toggleLanguage: this.toggleLanguage
    }

    render() {
        return (
            <div>
                <Language.Provider value={{ 
                    language: this.state.language, 
                    toggleLanguage: this.state.toggleLanguage 
                }}>
                    <ButtonToggleLanguage/>
                    <BooksPage/>
                </Language.Provider>
            </div>
        )
    }

}

export default App