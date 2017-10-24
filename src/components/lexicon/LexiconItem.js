import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'
import { Table, Button, Icon } from 'semantic-ui-react'

class LexiconItem extends React.Component{
  handleClick = () => {
    const response = window.confirm("You're about to delete this from your lexicon, are you sure?")
    response ? this.props.deleteLexicon(this.props.word.id) : null
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
          <Button color="red" onClick={this.handleClick}>
            <Icon name="trash outline"/> Delete
          </Button>
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
