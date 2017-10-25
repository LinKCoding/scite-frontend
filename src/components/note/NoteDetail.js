import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../../actions/note'
import { Table, Button, Icon } from 'semantic-ui-react'

class NoteDetail extends React.Component {
  handleClick = () => {
    const response = window.confirm("You're about to delete this from your notes, are you sure?")
    response ?
    this.props.deleteNote(this.props.info.id) : null
  }

  render(){
    const { article_name, date_created, id } = this.props.info
    return(
      <Table.Row>
      <Table.Cell>{date_created}</Table.Cell>
      <Table.Cell><Link to={`notes/${id}`}>{article_name}</Link></Table.Cell>
      <Table.Cell singleLine textAlign="center">
        <Button color="red" onClick={this.handleClick} >
          <Icon name="trash outline"/> Delete
        </Button>
      </Table.Cell>
      </Table.Row>
    )

  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteNote: (note) => {
      dispatch(deleteNote(note))
    }
  }

}

export default connect(null, mapDispatchToProps)(NoteDetail)
