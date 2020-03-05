import React from 'react'

// ***** ACCEPTABLE PROPS *****
// tags [array]: list of tags that will be rendered
// deletableTags [boolean]: It says if the delete button will or not appear on each tag

const ListaTags = props => {
    return (
        <ul>
            {props.tags.map((tag, i) => <Tag tagName={tag} key={i} deletable={props.deletableTags}/>)}
        </ul>
    )
}

ListaTags.defaultProps = {
    tags: [],
    deletableTags: true
}

const Tag = props => (
    <li>
        {props.tagName}
        {props.deletable && <button>x</button>}
    </li>
)

export default ListaTags