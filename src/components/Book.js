import React from 'react'
import { Link } from 'react-router-dom'
import EditaBook from './EditaBook'
import Language from '../contexts/Language'
import Card from './Card'

// ***** ACCEPTABLE PROPS *****
// index [number]: Book's index in the parent element's Array of Books
// book [Book]: Object containing the book's data.
// deleteBook [function]: Function called when the button "Excluir" is clicked. 
//                        The index will be passed through the function.
// editBook [function] (required): Function called when a book is edited

class Book extends React.Component {

    state = {
        isEditting: false
    }

    handleCancelEditing = e => {
        this.setState(prev => ({ isEditting: false }))
    }

    handleEdit = (bookName, bookAuthor, description) => {
        this.setState(prev => ({ isEditting: false }))
        this.props.editBook(bookName, bookAuthor, description, this.props.index)
    }

    getStaticText = lang => {

        if (lang === 'pt-br') {
            return {
                text1: 'Editar',
                text2: 'Excluir',
                text3: 'Ver Notas'
            }
        } else {
            return {
                text1: 'Edit',
                text2: 'Remove',
                text3: 'See Notes'
            }
        }

    }

    render() {

        const staticText = this.getStaticText(this.context.language)

        if (this.state.isEditting) {
            // A nota está sendo editada
            return <EditaBook
                        handleCancelOperation={this.handleCancelEditing}
                        book={this.props.book}
                        addBook={this.handleEdit}
                    />
        } else {
            
            return (
                <Card>
                    <div className="title">
                        {this.props.book.bookName}{this.props.book.bookAuthor && 
                                                ' - ' + this.props.book.bookAuthor}
                    </div>
                    {this.props.book.description && <p>{this.props.book.description}</p>}
                    <div>
                        
                        <button className="btn-cmd" onClick={e => this.setState(prev => ({ isEditting: true }))}>
                            {staticText.text1}
                        </button>
                        <button className="btn-cmd" onClick={e => this.props.deleteBook(this.props.index)}>
                            {staticText.text2}
                        </button>
                        <Link to={`/book/${this.props.index}`}>{staticText.text3}</Link>
                    </div>
                </Card>
            )
        }

    }
}

Book.defaultProps = {
    deleteBook: () => {}
}

Book.contextType = Language

export default Book