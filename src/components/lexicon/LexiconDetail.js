import React from 'react'
import { connect } from 'react-redux'
import Dictionary from '../Dictionary'
import { updateLexicon } from '../../actions/lexicon'
import { settingNote } from '../../actions/note'
import { Link } from 'react-router-dom'
import { Grid, Segment, Container, Form, Button, Message } from 'semantic-ui-react'

class LexiconDetail extends React.Component{

  state = {
    word: this.props.word.word,
    definition: this.props.word.definition,
    changed: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  findNote = () => {
    return this.props.notes.filter(note => note.id === this.props.word.note_id)[0]
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { word, definition } = this.state
    this.props.updateLexicon({word, definition}, this.props.word.id)
    console.log(this.findNote());
    this.props.settingNote(this.props.word.id)
    this.setState({
      changed: true
    })
  }

  saveMessage = () => {
    return(
      <Message color="teal" content='Incorrect E-mail or password.' />
    )
  }

  render(){
    const { word, note_id } = this.props.word

    return(
      <Grid>

        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={7}>
          <Container>
            <Segment clearing>
              <h2> Editing: "{word}"</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input label='Word' type='text' name="word" onChange={this.handleChange} value={this.state.word}/>
                <Form.TextArea label='Definition' type='textarea' name="definition" onChange={this.handleChange} value={this.state.definition}/>
                <Button color="teal" type="submit" className="ui right floated"> Change word </Button>
              </Form>
            </Segment>
            {this.state.changed? <Message color="teal" content={`Successfully saved "${this.state.word}"`} /> : null}
          </Container>
        </Grid.Column>
        <Grid.Column width={7}>
          <Dictionary />
        </Grid.Column>


        <Grid.Column width={1}>
        </Grid.Column>

      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateLexicon: (word, lexiconID) => {
      dispatch(updateLexicon(word, lexiconID))
    },
    settingNote: (note) => {
      dispatch(settingNote(note))
    }
  }
}

function mapStateToProps(state){
  return{
    notes: state.note.notes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LexiconDetail)

// <div>
//   <h2> Editing  "{word}"</h2>
//   <form onSubmit={this.handleSubmit}>
//     <span>Word:</span>
//     <input type="text" name="word" onChange={this.handleChange} value={this.state.word}/><br/>
//     <span>Definition:</span>
//     <input type="text" name="definition" onChange={this.handleChange} value={this.state.definition}/><br/>
//     <input type="submit" />
//   </form>
//   <Link to={`/notes/${note_id}`}>Go back to your note</Link>
//   <Dictionary />
// </div>
