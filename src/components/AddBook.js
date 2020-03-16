import React from 'react'
import Language from '../contexts/Language'

// ***** ACCEPTABLE PROPS *****
// addBook [function] (required): Function called when a book is added.
// handleCancelOperation [function]: function called when the button "Cancelar" is clicked
// book [Book]: Info about the book which is being editted.
// isEdition [boolean]: Boolean indicating if this is an edition or not. Default false.

class AddBook extends React.Component {

    state = {
        bookName: this.props.book.bookName,
        bookAuthor: this.props.book.bookAuthor,
        description: this.props.book.description
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState(prev => ({
            [name]: value
        }))
    }

    handleAddBook = e => {
        this.props.addBook(this.state.bookName, this.state.bookAuthor, this.state.description)
        this.setState(prev => ({
            bookName: '',
            authorName: '',
            description: ''
        }))
    }

    handleCancelOperation = e => {
        if (this.props.handleCancelOperation) this.props.handleCancelOperation()
    }

    getStaticText = lang => {

        if (lang === 'pt-br') {
            return {
                text1: 'título do livro',
                text2: 'autor do livro',
                text3: 'informações adicionais',
                text4: 'Adicionar',
                text5: 'Salvar',
                text6: 'Cancelar'
            }
        } else {
            return {
                text1: 'book name',
                text2: 'author name',
                text3: 'some extra info',
                text4: 'Add',
                text5: 'Save',
                text6: 'Cancel'
            }
        }

    }

    render() {

        const staticText = this.getStaticText(this.context.language)

        return (
            <div>
                <input 
                    type="text"
                    name="bookName"
                    value={this.state.bookName}
                    onChange={this.handleInputChange}
                    placeholder={staticText.text1}
                />
                <input 
                    type="text"
                    name="bookAuthor"
                    value={this.state.bookAuthor}
                    onChange={this.handleInputChange}
                    placeholder={staticText.text2}
                />
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder={staticText.text3}
                />
                <button onClick={this.handleAddBook}>
                    {(this.props.isEdition) ? staticText.text5 : staticText.text4}
                </button>
                {this.props.isEdition && 
                    <button onClick={this.handleCancelOperation}>
                        {staticText.text6}
                    </button>
                }
            </div>
        )
    }
}

AddBook.contextType = Language

AddBook.defaultProps = {
    book: {
        bookName: '',
        bookAuthor: '',
        description: ''
    }
}

export default AddBook