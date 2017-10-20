import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NoteDetail extends React.Component {
  render(){
    const { article_name, date_created, id } = this.props.info
    return(
      <tr>
      <td>{date_created}</td>
      <td><Link to={`notes/${id}`}>{article_name}</Link></td>
      <td></td>
      </tr>
    )

  }
}

export default NoteDetail
