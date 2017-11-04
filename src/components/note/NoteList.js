import React from 'react'
import NoteDetail from './NoteDetail'
import { Table } from 'semantic-ui-react'

class NoteList extends React.Component {
  render() {

    if(this.props.notes.length !== 0){

      return(
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Started</Table.HeaderCell>
              <Table.HeaderCell>Article title</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.notes.map((note, index)=>{ return <NoteDetail key={`note-${index}`} info={note} />})}
          </Table.Body>
        </Table>


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
