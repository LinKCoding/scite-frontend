import React from 'react'
import { Link } from 'react-router-dom'

const NoteDetail = (props) => {
  console.log(props.info);
  const { article_name, date_created, id } = props.info
  return(
    <tr>
      <td>{date_created}</td>
      <td><Link to={`notes/${id}`}>{article_name}</Link></td>
    </tr>
  )
}

export default NoteDetail
