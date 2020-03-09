import React from 'react'
import Language from '../contexts/Language'

// ***** ACCEPTABLE PROPS *****
// handleAddTag [function]: function that will be called when a tag is added

const AddTag = props => {

    const handleAddTag = e => {
        const tag = e.target.value

        // Add the tag when the user types spacebar
        if (tag.trim() && tag.endsWith(' ')) {
            if (props.handleAddTag) props.handleAddTag(tag.trim())
            e.target.value = ''
        }
    }

    const getStaticText = lang => {
        if (lang === 'pt-br') {
            return 'tags separadas por espaço'
        } else {
            return 'tags separated by spaces'
        }
    }

    return (
        // Uma vez que se trata de function component, utilizamos o Consumer em vez de contextType.
        <Language.Consumer>
            {language => {
                
                return (
                    <div>
                        <input 
                            type="text" 
                            placeholder={getStaticText(language.language)}
                            onChange={handleAddTag}
                        />
                    </div>
                )
            }}
        </Language.Consumer>
    )
}

export default AddTag