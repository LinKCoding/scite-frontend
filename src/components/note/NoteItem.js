import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'
import Dictionary from '../Dictionary'
import TextEditor from './TextEditor'

class NoteItem extends React.Component {

  componentDidMount(){
    this.props.setNote(this.props.noteID)
  }


  render(){

    return(
      <div>
        {/*<ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null }/>
        <Dictionary />*/}

      </div>
    )
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
