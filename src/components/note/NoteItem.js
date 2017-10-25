import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'
import Dictionary from '../Dictionary'
import PlainEditor from './PlainEditor'
import NoteLexicon from './NoteLexicon'
import CreateNewLexicon from './CreateNewLexicon'
import { Grid, Container } from 'semantic-ui-react'

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
        <Grid >
          <Grid.Row> {/*Checking*/}
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={9}>

                <ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null }/>

            </Grid.Column>
            <Grid.Column width={5} className="container-white">

                <PlainEditor noteID={this.props.noteID} noteContent={this.props.currentNote.note.content}/>

            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <CreateNewLexicon noteID={this.props.noteID}/>
          </Grid.Row>
          <Grid.Row className="container-white">
            <NoteLexicon lexicon={relevantLexicon}/>
          </Grid.Row>
          <Grid.Row>
            <Dictionary />
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
