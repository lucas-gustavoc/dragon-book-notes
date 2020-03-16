import React from 'react'
import Language from '../contexts/Language'
import PageTitle from './PageTitle'
import AddBook from './AddBook'
import ListaBooks from './ListaBooks'

class BooksPage extends React.Component {

    state = {
        books: []
    }

    handleAddBook = (bookName, bookAuthor, description) => {
        const books = this.state.books
        books.unshift({ bookName, bookAuthor, description })
        this.setState(prev => ({ books }))
    }

    handleDeleteBook = (bookIndex) => {
        const books = this.state.books
        books.splice(bookIndex, 1)
        this.setState(prev => ({ books }))
    }

    handleEditBook = (bookName, bookAuthor, description, bookIndex) => {
        const books = this.state.books
        books[bookIndex].bookName = bookName
        books[bookIndex].bookAuthor = bookAuthor
        books[bookIndex].description = description
        this.setState(prev => ({ books }))
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
                <PageTitle is={staticText.text1}/>
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