import React from 'react'
import Language from '../contexts/Language'
import PageTitle from './PageTitle'
import AddBook from './AddBook'

class BooksPage extends React.Component {

    state = {
        books: []
    }

    handleAddBook = (bookName, bookAuthor, description) => {
        const books = this.state.books
        books.unshift({ bookName, bookAuthor, description })
        this.setState(prev => ({ books }))
        console.log(books)
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
                <div>Lugar para ver e editar os livros cadastrados</div>
            </div>
        )
    }

}

BooksPage.contextType = Language

export default BooksPage