import React from 'react'
import NoteList from './NoteList'
import NoteItem from './NoteItem'
import { connect } from 'react-redux'
import { fetchedLexicon } from '../../actions/lexicon'
import { fetchNotes } from '../../actions/note'
import { Route, Link } from 'react-router-dom'

class NoteContainer extends React.Component {
  componentDidMount(){
    this.props.fetchNotes()
    this.props.fetchedLexicon()
  }

  render(){
    const { notes, lexicon } = this.props
    console.log(this.props);
    if(notes.fetchedNotes) {
      if(notes.notes.length === 0) {
        return(
          <h3> looks like you don't have any notes yet, check out an <Link to="/articles">article</Link> and create one!</h3>
        )
      } else {
        return(
          <div>
            <Route exact path="/notes" render={(props)=> <NoteList notes={notes.notes} lexicon={lexicon} routerProps={props} /> } />
            <Route path="/notes/:id" render={(props)=> {
                const id = props.match.params.id

                return <NoteItem routerProps={props} lexicon={lexicon} noteID={id}/>  }} />
              </div>
            )
      }
    } else {
      return <h3>loading</h3>
    }
  }
}

function mapStateToProps(state){
  return {
    notes: state.note,
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
