import React from 'react'

class EditarNota extends React.Component {

    state = {
        description: 'This is a great note',
        tags: []
    }

    handleDescriptionData = e => {
        const desc = e.target.value

        this.setState(prev => ({
            description: desc
        }))
    }

    handleTagsData = e => {
        const tag = e.target.value

        // Verificar casos em que se digitou apenas espaços na tag
        if (tag && tag.endsWith(' ')) {
            this.setState(prev => ({
                tags: prev.tags.concat(tag)
            }))
            e.target.value = ''
        }
    }

    render() {
        return (
            <div>
                <p>
                    <textarea
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleDescriptionData}
                    />
                </p>
                <div>
                    <input 
                        type="text" 
                        placeholder="nova tag"
                        onChange={this.handleTagsData}
                    />
                    <ul>
                        <li>#dragon</li>
                        <li>#book</li>
                        <li>#notes</li>
                        <li>#greatOne</li>
                    </ul>
                </div>
                <div>
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
                <div>
                    <p>{this.state.description}</p>
                    <p>{this.state.tags}</p>
                </div>
            </div>
        )
    }
}

export default EditarNota