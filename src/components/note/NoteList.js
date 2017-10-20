import React from 'react'
import NoteDetail from './NoteDetail'
import { Link } from 'react-router-dom'

class NoteList extends React.Component {
  render() {

    if(this.props.notes.length !== 0){

      return(
        <table>
          <tbody>
            <tr>
              <th>Date Started</th>
              <th>Article title</th>
            </tr>
            {this.props.notes.map((note)=>{ return <NoteDetail info={note} />})}
          </tbody>
        </table>


      )
    } else {
      return null
    }
  }
}
//can be dumb component

// <div>
//   {this.props.notes.map(note => {
//     console.log(note);
//     return (<Link to={`/notes/${note.id}`}>Note for article #{note.article_id} </Link>)
//   })}
//
// </div>

export default NoteList
