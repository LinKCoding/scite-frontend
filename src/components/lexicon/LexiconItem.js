import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'
import { Table, Button, Icon, Confirm } from 'semantic-ui-react'

class LexiconItem extends React.Component{
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    this.props.deleteLexicon(this.props.word.id)
    this.setState({
      open: false
    })
  }
  handleCancel = () => {
    this.setState({
      open: false
    })
  }


  render(){
    const { word, definition, note_id, id} = this.props.word
    return(
      <Table.Row>
        <Table.Cell><Link to={`/lexicon/${id}`}>{word}</Link></Table.Cell>
        <Table.Cell>{definition}</Table.Cell>
        <Table.Cell>
          <Button color="blue" inverted><Link to={`/notes/${note_id}`}>Edit</Link></Button>
        </Table.Cell>
        <Table.Cell singleLine>
          <Button color="red" onClick={this.show}>
            <Icon name="trash outline"/> Delete
          </Button>
          <Confirm
            content={`You're about to delete "${word}" from your lexicon, are you sure?`}
            open={this.state.open}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </Table.Cell>
      </Table.Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteLexicon: (lexiconID) => {
      dispatch(deleteLexicon(lexiconID))
    }
  }
}

export default connect(null, mapDispatchToProps)(LexiconItem)
