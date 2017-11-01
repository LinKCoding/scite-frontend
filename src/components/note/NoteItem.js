import React from 'react'
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import ArticleWindow  from '../ArticleWindow'
import Dictionary from '../Dictionary'
import PlainEditor from './PlainEditor'
import NoteLexicon from './NoteLexicon'
import CreateNewLexicon from './CreateNewLexicon'
import { Grid, Container, Segment, Image, Header, Dimmer, Loader } from 'semantic-ui-react'

class NoteItem extends React.Component {

  componentDidMount(){
    console.log("MOUNTING");
    this.props.setNote(this.props.routerProps.match.params.id)
  }

  checkForLexicon = () => {
    return this.props.lexicon.filter((word) => {
      return word.note_id === parseInt(this.props.currentNote.note.id, 10)
    })
  }

  lexiconSegment = () => {
    const relevantLexicon = this.checkForLexicon()
    return(
      <Grid.Row>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={14}>
          <Segment>
            <NoteLexicon lexicon={relevantLexicon}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid.Row>
    )
  }

  render(){
    if(this.props.currentNote.note){
      const relevantLexicon = this.props.lexicon.filter((word) => {
        return word.note_id === parseInt(this.props.currentNote.note.id, 10)
      })
      const convertedContent = this.props.correctNote && this.props.correctNote.content.replace(/=>/g, ":")
      return(
        <Grid >
          <Grid.Row> {/*Checking*/}
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={9}>

                <ArticleWindow article={this.props.currentNote.article ? this.props.currentNote.article : null } dimensions={{height:'450vh', width:'800vh'}}/>

            </Grid.Column>
            <Grid.Column width={5}>
              <PlainEditor noteID={this.props.currentNote.note.id} correctNote={this.props.correctNote}  noteContent={ convertedContent || this.props.currentNote.note.content}/>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <Segment id="new-lexicon">
                <CreateNewLexicon noteID={this.props.noteID}/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>

          { this.checkForLexicon().length !== 0 ? this.lexiconSegment() : null }

          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <Dictionary oneLine={true}/>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return(
      null
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
