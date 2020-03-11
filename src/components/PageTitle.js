import React from 'react'

// ***** ACCEPTABLE PROPS *****
// is [string] (required): The page's title. If it's empty or undefined, 
//                         the component returns null.
// subtitle [string]: The page's subtitle.

const PageTitle = props => {
    if (!props.is) return null

    return (
        <React.Fragment>
            <h1>{props.is}</h1>
            {props.subtitle && <h3 style={{ color: 'grey' }}>{props.subtitle}</h3>}
        </React.Fragment>
    )
}

export default PageTitle