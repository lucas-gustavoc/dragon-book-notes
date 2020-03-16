import React from 'react'
import Book from './Book'

// ***** ACCEPTABLE PROPS *****
// books [array<Book>]: List of books to render
// handleDeleteBook [function]: Function called when some book was deleted
// handleEditBook [function]: Function called when some book was edited

class ListaBooks extends React.Component {

    handleDeleteBook = (bookIndex) => {
        if (this.props.handleDeleteBook) this.props.handleDeleteBook(bookIndex)
    }

    handleEditBook = (bookName, bookAuthor, description, bookIndex) => {
        if (this.props.handleEditBook) 
            this.props.handleEditBook(bookName, bookAuthor, description, bookIndex)
    }

    render() {
        
        return (
            <div>
                {this.props.books.map((book, i) => 
                    <Book 
                        key={i}
                        index={i}
                        book={book}
                        deleteBook={this.handleDeleteBook}
                        editBook={this.handleEditBook}
                    />
                )}
            </div>
        )
    }

}


ListaBooks.defaultProps = {
    books: []
}

export default ListaBooks