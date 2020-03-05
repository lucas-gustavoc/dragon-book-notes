import React from 'react'

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

    return (
        <div>
            <input 
                type="text" 
                placeholder="tags separadas por espaço"
                onChange={handleAddTag}
            />
        </div>
    )
}

export default AddTag