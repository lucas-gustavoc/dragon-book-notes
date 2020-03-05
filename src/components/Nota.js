import React from 'react'
import ListaTags from './ListaTags'

// ***** ACCEPTABLE PROPS *****
// description [string]: Note's description
// tags [array]: Note's tags
// createdAt [date]: Note's date of creation

class Nota extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.createdAt.toString()}
                </p>
                <p>
                    {this.props.description}
                </p>
                {(this.props.tags.length > 0) && <div>Tags: <ListaTags tags={this.props.tags}/></div>}
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Nota