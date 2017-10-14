import React from 'react'
import NoteItem from './NoteItem'

class NoteList extends React.Component {
  render() {

    if(this.props.notes.length !== 0){
      return(
        <div>
        
          {this.props.notes.map((note) => {
            console.log(note)
            return <NoteItem key={note.id}/>
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
