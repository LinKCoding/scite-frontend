import React from 'react'
import { connect } from 'react-redux'
import { addingWord } from '../../actions/lexicon'

class CreateNewLexicon extends React.Component {
  state = {
    word: "",
    definition: ""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props);
    this.props.addingWord(this.state, this.props.noteID)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="word" value={this.state.word} placeholder="word goes here..."/>
        <input onChange={this.handleChange} name="definition" value={this.state.definition} placeholder="definition goes here..."/>
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addingWord: (word, noteID) => {
      dispatch(addingWord(word, noteID))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateNewLexicon)
