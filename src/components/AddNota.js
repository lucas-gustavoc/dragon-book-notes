import React from 'react'
import ListaTags from './ListaTags'
import AddTag from './AddTag'
import Language from '../contexts/Language'

// ***** ACCEPTABLE PROPS *****
// handleAddNota [function] (required): function called when a note is added. 
//                                      It requires two params: description and tag, in this order
// handleCancelOperation [function]: function called when the button "Cancelar" is clicked
// description [string]: Text in case of an existing note being edited
// tags [array]: Array of tags in case of an existing note being edited
// isEdition [boolean]: Boolean indicating if this is an edition or not. Default false.

class AddNota extends React.Component {

    state = {
        description: this.props.description,
        tags: this.props.tags
    }

    handleDescriptionData = e => {
        const desc = e.target.value

        this.setState(prev => ({
            description: desc
        }))
    }

    handleAddTag = tag => {
        if (!this.state.tags.includes(tag)) {
            this.setState(prev => ({
                tags: prev.tags.concat(tag)
            }))
        }
    }

    handleRemoveTag = tagIndex => {
        const tags = this.state.tags
        tags.splice(tagIndex, 1)
        this.setState(prev => ({ tags }))
    }

    handleAddNota = e => {
        if (this.state.description) {
            this.props.handleAddNota(this.state.description, this.state.tags)
            this.setState(prev => ({
                description: '',
                tags: []
            }))
        }
    }

    handleCancelOperation = e => {
        if (this.props.handleCancelOperation) this.props.handleCancelOperation()
    }

    getStaticText = lang => {
        
        if (lang === 'pt-br') {
            return {
                text1: 'sua nota',
                text2: 'sua nova nota',
                text3: 'Salvar',
                text4: 'Adicionar',
                text5: 'Cancelar'
            }
        } else {
            return {
                text1: 'your note',
                text2: 'your brand new note',
                text3: 'Save',
                text4: 'Add',
                text5: 'Cancel'
            }
        }
    
    }

    render() {

        const staticText = this.getStaticText(this.context.language)

        return (
            <div>
                <p>
                    <textarea
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleDescriptionData}
                        placeholder={(this.props.isEdition) ? staticText.text1 : staticText.text2}
                    />
                </p>
                <AddTag handleAddTag={this.handleAddTag}/>
                <ListaTags tags={this.state.tags} handleRemoveTag={this.handleRemoveTag}/>
                <div>
                    <button onClick={this.handleAddNota}>{(this.props.isEdition) ? staticText.text3 : staticText.text4}</button>
                    {this.props.isEdition && <button onClick={this.handleCancelOperation}>{staticText.text5}</button>}
                </div>
            </div>
        )
    }
}

AddNota.defaultProps = {
    description: '',
    tags: [],
    isEdition: false
}

AddNota.contextType = Language

export default AddNota