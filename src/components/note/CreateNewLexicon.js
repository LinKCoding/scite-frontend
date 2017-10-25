import React from 'react'
import { connect } from 'react-redux'
import { addingWord } from '../../actions/lexicon'
import { Form, Button } from 'semantic-ui-react'

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
    this.setState({
      word: "",
      definition: ""
    })
  }


  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <strong>Add to your Lexicon</strong>
        <Form.Group floated>
          <Form.Input onChange={this.handleChange} name="word" value={this.state.word} placeholder="word goes here..." width={4}/>
          <Form.Input onChange={this.handleChange} name="definition" value={this.state.definition} placeholder="definition goes here..." width={11}/>
          <Button color="blue" type="submit" compact> Grasp </Button>
        </Form.Group>
      </Form>
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
