import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
                    <Router>
                        <Switch>
                            <Route path="/book/:id" component={BookNotesPage}/>
                            <Route path="/" exact component={BooksPage}/>
                            <Route>
                                <Language.Consumer>
                                    {
                                        (context) => {
                                            if (context.language === 'pt-br') 
                                                return <p>404 página não encontrada</p>
                                            else
                                                return <p>404 page not found...</p>
                                        }
                                    }
                                </Language.Consumer>
                            </Route>
                        </Switch>
                    </Router>
                </Language.Provider>
            </div>
        )
    }

}

export default App