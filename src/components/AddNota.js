import React from 'react'
import ListaTags from './ListaTags'
import AddTag from './AddTag'

// ***** ACCEPTABLE PROPS *****
// handleAddNota [function] (required): function called when a note is added. 
//                                      It requires two params: description and tag, in this order

class AddNota extends React.Component {

    state = {
        description: '',
        tags: []
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

    handleAddNota = e => {
        this.props.handleAddNota(this.state.description, this.state.tags)
        this.setState(prev => ({
            description: '',
            tags: []
        }))
    }

    render() {
        return (
            <div>
                <p>
                    <textarea
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleDescriptionData}
                        placeholder="sua nova nota..."
                    />
                </p>
                <AddTag handleAddTag={this.handleAddTag}/>
                <ListaTags tags={this.state.tags}/>
                <div>
                    <button onClick={this.handleAddNota}>Adicionar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        )
    }
}

export default AddNota