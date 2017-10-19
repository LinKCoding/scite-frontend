import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'
import Dictionary from '../Dictionary'
import PlainEditor from './PlainEditor'
import NoteLexicon from './NoteLexicon'
import CreateNewLexicon from './CreateNewLexicon'

class NoteItem extends React.Component {

  componentDidMount(){
    this.props.setNote(this.props.noteID)
  }


  render(){


    if(this.props.currentNote.note){
      const relevantLexicon = this.props.lexicon.filter((word) => {
        return word.note_id === parseInt(this.props.currentNote.note.id, 10)
      })
      console.log(relevantLexicon);
      return(
        <div>
          {<ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null }/>
        }
          <Dictionary />
          <CreateNewLexicon noteID={this.props.noteID}/>
          <NoteLexicon lexicon={relevantLexicon}/>
          <PlainEditor noteID={this.props.noteID} noteContent={this.props.currentNote.note.content}/>
        </div>
      )
    } else {
      return(
        <h3> loading...</h3>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    currentNote: state.note.currentNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    setNote: (noteID) => {
      dispatch(setNote(noteID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
