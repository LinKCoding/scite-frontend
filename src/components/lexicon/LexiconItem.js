import React from 'react'
import { Link } from 'react-router-dom'

class LexiconItem extends React.Component{
  render(){
    const { word, definition, note_id} = this.props.word
    return(
      <tr>
        <th>{word}</th>
        <th>{definition}</th>
        <th><Link to={`/notes/${note_id}`}>Edit</Link></th>
      </tr>
    )
  }
}

export default LexiconItem
