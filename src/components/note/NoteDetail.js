import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../../actions/note'

class NoteDetail extends React.Component {
  handleClick = () => {
    const response = window.confirm("You're about to delete this from your notes, are you sure?")
    {response ?
    this.props.deleteNote(this.props.info.id) : null }
  }

  render(){
    console.log(this.props);
    const { article_name, date_created, id } = this.props.info
    return(
      <tr>
      <td>{date_created}</td>
      <td><Link to={`notes/${id}`}>{article_name}</Link></td>
      <td><button onClick={this.handleClick}>Delete</button></td>
      </tr>
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
