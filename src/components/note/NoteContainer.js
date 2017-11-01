import React from 'react'
import NoteList from './NoteList'
import NoteItem from './NoteItem'
import { connect } from 'react-redux'
import { fetchedLexicon } from '../../actions/lexicon'
import { fetchNotes } from '../../actions/note'
import { Route, Link } from 'react-router-dom'
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'

class NoteContainer extends React.Component {
  componentDidMount(){
    this.props.fetchNotes()
    this.props.fetchedLexicon()
  }

  render(){
    const { notes, lexicon } = this.props
    if(notes.fetchedNotes) {
      if(notes.notes.length === 0) {
        return(
          <Grid>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <Segment>
                <h3> looks like you don't have any notes yet, check out an <Link to="/articles">article</Link> and create one!</h3>
              </Segment>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid>
        )
      } else {
        return(
          <Grid>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <Route exact path="/notes" render={(props)=> <NoteList notes={notes.notes} lexicon={lexicon} routerProps={props} /> } />
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            {this.props.notes.fetchedNotes ?
            <Route path="/notes/:id" render={(routerProps)=> {
                const id = routerProps.match.params.id
                const correctNote = notes.notes.find(note => {
                  return note.id == id
                })

                return <NoteItem routerProps={routerProps} lexicon={lexicon} noteID={id} correctNote={correctNote}/>  }} />
                : null }
          </Grid>
        )
      }
    } else {
      return (
        <Dimmer active>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      )
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
