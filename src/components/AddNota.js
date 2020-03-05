import React from 'react'
import ListaTags from './ListaTags'
import AddTag from './AddTag'

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
        this.props.handleAddNota(this.state.description, this.state.tags)
        this.setState(prev => ({
            description: '',
            tags: []
        }))
    }

    handleCancelOperation = e => {
        if (this.props.handleCancelOperation) this.props.handleCancelOperation()
    }

    render() {
        return (
            <div>
                <p>
                    <textarea
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleDescriptionData}
                        placeholder={(this.props.isEdition) ? 'sua nota' : 'sua nova nota'}
                    />
                </p>
                <AddTag handleAddTag={this.handleAddTag}/>
                <ListaTags tags={this.state.tags} handleRemoveTag={this.handleRemoveTag}/>
                <div>
                    <button onClick={this.handleAddNota}>Adicionar</button>
                    {this.props.isEdition && <button onClick={this.handleCancelOperation}>Cancelar</button>}
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

export default AddNota