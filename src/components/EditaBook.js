import React from 'react'
import AddBook from './AddBook'

// ***** ACCEPTABLE PROPS *****
// handleEditaBook [function] (required): function called when a book is added. 
//                                      It requires three params: bookName, bookAuthor and description
// book [Book] (required): Object with previous book info.
// handleCancelOperation [function]: function called when the button "Cancelar" is clicked

const EditaBook = props => <AddBook 
                                isEdition={true}
                                {...props}
                            />

EditaBook.defaultProps = {
    handleCancelOperation: () => {}
}

export default EditaBook