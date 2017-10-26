import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../../actions/note'
import { Table, Button, Icon, Confirm } from 'semantic-ui-react'

class NoteDetail extends React.Component {

  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    this.props.deleteNote(this.props.info.id)
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
    const { article_name, date_created, id } = this.props.info
    return(
      <Table.Row>
      <Table.Cell>{date_created}</Table.Cell>
      <Table.Cell><Link to={`notes/${id}`}>{article_name}</Link></Table.Cell>
      <Table.Cell singleLine textAlign="center">
        <Button color="red" onClick={this.show} >
          <Icon name="trash outline"/> Delete
        </Button>
        <Confirm
          content={`You're about to delete "${article_name}" from your notes, are you sure?`}
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
    deleteNote: (note) => {
      dispatch(deleteNote(note))
    }
  }

}

export default connect(null, mapDispatchToProps)(NoteDetail)
