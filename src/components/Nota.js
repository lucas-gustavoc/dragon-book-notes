import React from 'react'
import Moment from 'react-moment'
import ListaTags from './ListaTags'
import EditaNota from './EditaNota'
import Language from '../contexts/Language'
import Card from './Card'

// ***** ACCEPTABLE PROPS *****
// index [number]: Note's index in the parent element's Array of Notes
// description [string]: Note's description
// tags [array]: Note's tags
// createdAt [date]: Note's date of creation
// lastEditedAt [date]: Note's last edition date
// deleteNote [function]: Function called when the button "Excluir" is clicked. 
//                        The index will be passed through the function.
// editNote [function] (required): Function called when a note is edited

class Nota extends React.Component {

    state = {
        isEditting: false
    }

    handleCancelEditing = e => {
        this.setState(prev => ({ isEditting: false }))
    }

    handleEdit = (description, tags) => {
        this.setState(prev => ({ isEditting: false }))
        this.props.editNote(description, tags, this.props.index)
    }

    getStaticText = lang => {

        if (lang === 'pt-br') {
            return {
                text1: '[criada em ]DD/MM/YYYY [às ]HH:mm[. ]',
                text2: ' Atualizada ',
                text3: 'Editar',
                text4: 'Excluir'
            }
        } else {
            return {
                text1: '[taken at ]MM/DD/YYYY HH:mm[. ]',
                text2: ' Updated ',
                text3: 'Edit',
                text4: 'Remove'
            }
        }

    }

    render() {

        const statiText = this.getStaticText(this.context.language)

        if (this.state.isEditting) {
            // A nota está sendo editada
            return <EditaNota
                        handleCancelOperation={this.handleCancelEditing}
                        description={this.props.description}
                        tags={this.props.tags}
                        handleEditaNota={this.handleEdit}
                    />
        } else {
            // A nota não está sendo editada, apenas exibida
            const tagList = <div>Tags: <ListaTags tags={this.props.tags} deletableTags={false}/></div>
            const dataUltimaEdicao = (
                <Moment
                    locale={this.context.language}
                    date={this.props.lastEditedAt}
                    fromNow
                />
            )
            const mostrarDataEdicao = (this.props.lastEditedAt && 
                                      this.props.lastEditedAt !== this.props.createdAt)

            const dataCriacaoDaNota = (
                <React.Fragment>
                    <Moment
                        date={this.props.createdAt}
                        format={statiText.text1}
                    />
                    {mostrarDataEdicao && statiText.text2}
                    {mostrarDataEdicao && dataUltimaEdicao}
                </React.Fragment>
            )
            

            return (
                <Card>
                    <div className="date">
                        {this.props.createdAt && dataCriacaoDaNota}
                    </div>
                    <div className="note">
                        <p>
                            {this.props.description}
                        </p>
                        {(this.props.tags.length > 0) && tagList}
                    </div>
                    <div>
                        <button className="btn-cmd" onClick={e => this.setState(prev => ({ isEditting: true }))}>{statiText.text3}</button>
                        <button className="btn-cmd" onClick={e => this.props.deleteNote(this.props.index)}>{statiText.text4}</button>
                    </div>
                </Card>
            )
        }

    }
}

Nota.defaultProps = {
    deleteNote: () => {}
}

Nota.contextType = Language

export default Nota