import React from 'react'
import Language from '../contexts/Language'

// ***** ACCEPTABLE PROPS *****
// addBook [function] (required): Function called when a book is added.

class AddBook extends React.Component {

    state = {
        bookName: '',
        authorName: '',
        description: ''
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState(prev => ({
            [name]: value
        }))
    }

    handleAddBook = e => {
        this.props.addBook(this.state.bookName, this.state.authorName, this.state.description)
        this.setState(prev => ({
            bookName: '',
            authorName: '',
            description: ''
        }))
    }

    getStaticText = lang => {

        if (lang === 'pt-br') {
            return {
                text1: 'título do livro',
                text2: 'autor do livro',
                text3: 'informações adicionais',
                text4: 'Adicionar'
            }
        } else {
            return {
                text1: 'book name',
                text2: 'author name',
                text3: 'some extra info',
                text4: 'Add'
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
                    name="authorName"
                    value={this.state.authorName}
                    onChange={this.handleInputChange}
                    placeholder={staticText.text2}
                />
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder={staticText.text3}
                />
                <button onClick={this.handleAddBook}>{staticText.text4}</button>
            </div>
        )
    }
}

AddBook.contextType = Language

export default AddBook