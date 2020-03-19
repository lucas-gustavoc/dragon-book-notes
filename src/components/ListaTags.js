import React from 'react'

// ***** ACCEPTABLE PROPS *****
// tags [array]: list of tags that will be rendered
// deletableTags [boolean]: It says if the delete button will or not appear on each tag
// handleRemoveTag [function]: Function called when a tag is removed. It passes tag index as param.

const ListaTags = props => {

    if (props.tags.length === 0) return null

    const handleRemoveTag = tagIndex => {
        if (props.handleRemoveTag) props.handleRemoveTag(tagIndex)
    }

    return (
        <ul>
            {props.tags.map((tag, i) => {
                return <Tag
                            tagName={tag}
                            key={i}
                            index={i}
                            deletable={props.deletableTags}
                            removeTag={handleRemoveTag}
                        />
            })}
        </ul>
    )
}

ListaTags.defaultProps = {
    tags: [],
    deletableTags: true
}

const Tag = props => {

    // Em caso de tag sem nome, o componente não renderiza
    if (!props.tagName) return null

    return (
        <li>
            {props.tagName}
            {props.deletable && 
                <React.Fragment>
                    &nbsp;<span className="remove" onClick={e => props.removeTag(props.index)}>[x]</span>
                </React.Fragment>
            }
        </li>
    )
}

export default ListaTags