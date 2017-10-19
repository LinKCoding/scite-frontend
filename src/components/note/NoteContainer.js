import React from 'react'
import NoteList from './NoteList'
import NoteItem from './NoteItem'
import { connect } from 'react-redux'
import { fetchedLexicon } from '../../actions/lexicon'
import { fetchNotes } from '../../actions/note'
import { Route } from 'react-router-dom'

class NoteContainer extends React.Component {
  componentDidMount(){
    this.props.fetchNotes()
    this.props.fetchedLexicon()
  }

  render(){
    return(
      <div>
        <Route exact path="/notes" render={(props)=> <NoteList notes={this.props.notes} lexicon={this.props.lexicon} routerProps={props} /> } />
        <Route path="/notes/:id" render={(props)=> {
            const id = props.match.params.id

            return <NoteItem routerProps={props} lexicon={this.props.lexicon} noteID={id}/>  }} />

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    notes: state.note.notes,
    fetchingNotes: state.note.fetchingNotes,
    lexicon: state.lexicon.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchNotes: () => { dispatch(fetchNotes())},
    fetchedLexicon: () => {
      dispatch(fetchedLexicon())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
