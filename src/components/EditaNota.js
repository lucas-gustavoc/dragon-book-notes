import React from 'react'
import AddNota from './AddNota'

// ***** ACCEPTABLE PROPS *****
// handleEditaNota [function] (required): function called when a note is added. 
//                                      It requires two params: description and tag, in this order
// handleCancelOperation [function]: function called when the button "Cancelar" is clicked
// description [string]: Text in case of an existing note being edited
// tags [array]: Array of tags in case of an existing note being edited

const EditaNota = props => <AddNota 
                                isEdition={true}
                                handleAddNota={props.handleEditaNota}
                                handleCancelOperation={props.handleCancelOperation}
                                description={props.description}
                                tags={props.tags}
                            />

EditaNota.defaultProps = {
    handleCancelOperation: () => {},
    description: '',
    tags: []
}

export default EditaNota