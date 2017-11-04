import React from 'react'
import DefinitionList from './DefinitionList'
import { Form, Segment, Button } from 'semantic-ui-react'

class Dictionary extends React.Component{
  state = {
    word: "",
    definitions: [],
    searched: false
  }

  handleSubmit = (e) => {
    const trimmedWord = this.state.word.trim()
    e.preventDefault()
    fetch(`https://scite-backend.herokuapp.com/api/v1/dictionary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'word': trimmedWord
      })
    }).then((res) => res.json())
    .then((definitions) => {this.setState({
      definitions: definitions,
      searched: true
    })
  })
  }

  handleChange = (e) => {
    this.setState({
      word: e.target.value.toLowerCase()
    })
  }


  render(){
    // console.log(this.state.definitions);
    if(this.props.oneLine){
      return(
        <Segment >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input inline label="Scite Dictionary" type="text" value={this.state.word} onChange={this.handleChange}/>
              <Button color="blue" type="submit" className="ui right floated"> Define </Button>
            </Form.Group>
          </Form>
          <DefinitionList definitions={this.state.definitions} searched={this.state.searched}/>
        </Segment>
      )
    } else {
      return(
        <Segment clearing>
          <h2>Scite Dictionary</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input type="text" value={this.state.word} onChange={this.handleChange}/>
            <Button color="blue" type="submit" className="ui right floated"> Define </Button>
          </Form>
          <DefinitionList definitions={this.state.definitions} searched={this.state.searched}/>
        </Segment>
      )
    }
  }
}

export default Dictionary
