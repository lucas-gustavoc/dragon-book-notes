import React from 'react'
import Moment from 'react-moment'
import ListaTags from './ListaTags'
import AddNota from './AddNota'

// ***** ACCEPTABLE PROPS *****
// index [number]: Note's index in the parent element's Array of Notes
// description [string]: Note's description
// tags [array]: Note's tags
// createdAt [date]: Note's date of creation
// deleteNote [function]: Function called when the button "Excluir" is clicked. 
//                        The index will be passed through the function.
// editNote [function]: Function called when a note is edited

class Nota extends React.Component {

    state = {
        isEditting: false
    }

    handleDelete = e => {
        if (this.props.deleteNote) this.props.deleteNote(this.props.index)
    }

    handleStartEditing = e => {
        this.setState(prev => ({ isEditting: true }))
    }

    handleCancelEditing = e => {
        this.setState(prev => ({ isEditting: false }))
    }

    handleEdit = (description, tags) => {
        this.setState(prev => ({ isEditting: false }))
        this.props.editNote(description, tags, this.props.index)
    }

    render() {

        if (this.state.isEditting) {
            // A nota está sendo editada
            return <AddNota
                        handleCancelOperation={this.handleCancelEditing}
                        description={this.props.description}
                        tags={this.props.tags}
                        handleAddNota={this.handleEdit}
                        isEdition={true}
                    />
        } else {
            // A nota não está sendo editada, apenas exibida
            const tagList = <div>Tags: <ListaTags tags={this.props.tags} deletableTags={false}/></div>
            const dataCriacaoDaNota = (
                <p>
                    <Moment
                        date={this.props.createdAt}
                        format="[criada em ]DD/MM/YYYY [às ]HH:mm"
                    />
                </p>
            )

            return (
                <div>
                    {this.props.createdAt && dataCriacaoDaNota}
                    <p>
                        {this.props.description}
                    </p>
                    {(this.props.tags.length > 0) && tagList}
                    <div>
                        <button onClick={this.handleStartEditing}>Edit</button>
                        <button onClick={this.handleDelete}>Excluir</button>
                    </div>
                </div>
            )
        }

    }
}

export default Nota