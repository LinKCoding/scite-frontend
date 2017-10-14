import React from 'react'
import NoteList from './NoteList'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/note'

class NoteContainer extends React.Component {
  componentDidMount(){
    this.props.fetchNotes()
  }

  render(){
    return(
      <div>
        <NoteList notes={this.props.notes} />
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
