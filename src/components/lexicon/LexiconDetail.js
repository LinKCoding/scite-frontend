import React from 'react'
import { connect } from 'react-redux'
import Dictionary from '../Dictionary'
import { updateLexicon } from '../../actions/lexicon'

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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateLexicon(this.state, this.props.word.id)
  }

  render(){
    const { word, definition } = this.props.word
    console.log(this.props);
    console.log(this.state);
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
        <Dictionary />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateLexicon: (word, lexiconID) => {
      dispatch(updateLexicon(word, lexiconID))
    }
  }
}

export default connect(null, mapDispatchToProps)(LexiconDetail)
