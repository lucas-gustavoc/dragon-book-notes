import React from 'react'
import Language from '../contexts/Language'
import PageTitle from './PageTitle'
import AddBook from './AddBook'
import ListaBooks from './ListaBooks'
import ButtonToggleLanguage from './ButtonToggleLanguage'

class BooksPage extends React.Component {

    state = {
        books: [],
        lastEditedAt: new Date()
    }

    componentDidMount() {
        const localData = localStorage.dragonBookNotesData

        if (localData) {
            const JSONdata = JSON.parse(localData)
            this.setState(prev => ({
                books: JSONdata.books
            }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.lastEditedAt !== prevState.lastEditedAt) {
            const JSONdata = JSON.stringify({ books: this.state.books })
            localStorage.dragonBookNotesData = JSONdata
        }
    }

    handleAddBook = (bookName, bookAuthor, description) => {
        const books = this.state.books
        books.push({ bookName, bookAuthor, description, notes: [] })
        this.setState(prev => ({ books, lastEditedAt: new Date() }))
    }

    handleDeleteBook = (bookIndex) => {
        const books = this.state.books
        books.splice(bookIndex, 1)
        this.setState(prev => ({ books, lastEditedAt: new Date() }))
    }

    handleEditBook = (bookName, bookAuthor, description, bookIndex) => {
        const books = this.state.books
        books[bookIndex].bookName = bookName
        books[bookIndex].bookAuthor = bookAuthor
        books[bookIndex].description = description
        this.setState(prev => ({ books, lastEditedAt: new Date() }))
    }

    getStaticText = lang => {

        if (lang === 'pt-br') {
            return {
                text1: 'Seus Livros'
            }
        } else {
            return {
                text1: 'Your Books'
            }
        }

    }

    render() {

        const staticText = this.getStaticText(this.context.language)

        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <ButtonToggleLanguage className="toggle-language"/>
                        <PageTitle is={staticText.text1}/>
                    </div>
                </div>
                <AddBook addBook={this.handleAddBook}/>
                <ListaBooks 
                    books={this.state.books}
                    handleDeleteBook={this.handleDeleteBook}
                    handleEditBook={this.handleEditBook}
                />
            </div>
        )
    }

}

BooksPage.contextType = Language

export default BooksPage