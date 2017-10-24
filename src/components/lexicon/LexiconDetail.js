import React from 'react'
import { connect } from 'react-redux'
import Dictionary from '../Dictionary'
import { updateLexicon } from '../../actions/lexicon'
import { settingNote } from '../../actions/note'
import { Link } from 'react-router-dom'

class LexiconDetail extends React.Component{

  state = {
    word: this.props.word.word,
    definition: this.props.word.definition
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
    this.props.updateLexicon(this.state, this.props.word.id)
    console.log(this.findNote());
    this.props.settingNote(this.props.word.id)
  }

  render(){
    const { word, note_id } = this.props.word

    return(
      <div>
        <h2> Editing  "{word}"</h2>
        <form onSubmit={this.handleSubmit}>
          <span>Word:</span>
          <input type="text" name="word" onChange={this.handleChange} value={this.state.word}/><br/>
          <span>Definition:</span>
          <input type="text" name="definition" onChange={this.handleChange} value={this.state.definition}/><br/>
          <input type="submit" />
        </form>
        <Link to={`/notes/${note_id}`}>Go back to your note</Link>
        <Dictionary />
      </div>
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
