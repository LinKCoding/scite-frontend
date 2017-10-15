import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'

class NoteItem extends React.Component {

  componentDidMount(){
    this.props.setNote(this.props.noteID)
  }


  render(){
    // console.log(this.articleID);
    console.log(this.props.currentNote);

    return(
      <div>
        <ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null }/>
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
