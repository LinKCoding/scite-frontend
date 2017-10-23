import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'
import Dictionary from '../Dictionary'
import PlainEditor from './PlainEditor'
import NoteLexicon from './NoteLexicon'
import CreateNewLexicon from './CreateNewLexicon'
import { Grid } from 'semantic-ui-react'

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
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>
              <ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null }/>
            </Grid.Column>
            <Grid.Column width={1}>
              <Dictionary />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <CreateNewLexicon noteID={this.props.noteID}/>
          </Grid.Row>
          <Grid.Row>
            <NoteLexicon lexicon={relevantLexicon}/>
          </Grid.Row>
          <Grid.Row>
            <PlainEditor noteID={this.props.noteID} noteContent={this.props.currentNote.note.content}/>
          </Grid.Row>  
        </Grid>
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
