import React from 'react'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'

class NoteList extends React.Component {
  render() {

    if(this.props.notes.length !== 0){
      return(
        <div>
          {this.props.notes.map(note => {
            console.log(note);
            return (<Link to={`./notes/${note.id}`}>Note for article #{note.article_id} </Link>)
          })}

        </div>
      )
    } else {
      return null
    }
  }
}
//can be dumb component

export default NoteList

// {this.props.notes.map((note) => {
//   console.log(note)
//   return <NoteItem key={note.id}/>
// })}
