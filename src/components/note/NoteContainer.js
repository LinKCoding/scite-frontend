import React from 'react'
import NoteList from './NoteList'
import NoteItem from './NoteItem'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/note'
import { Route } from 'react-router-dom'

class NoteContainer extends React.Component {
  componentDidMount(){
    this.props.fetchNotes()
  }

  render(){
    return(
      <div>
        <Route exact path="/notes" render={(props)=> <NoteList notes={this.props.notes} routerProps={props} /> } />
        <Route path="/notes/:id" render={(props)=> {
            const id = props.match.params.id

            return <NoteItem routerProps={props} noteID={id}/>  }} />

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    notes: state.note.notes,
    fetchingNotes: state.note.fetchingNotes
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchNotes: () => { dispatch(fetchNotes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
