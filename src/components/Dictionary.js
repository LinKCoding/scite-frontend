import React from 'react'
import DefinitionList from './DefinitionList'
class Dictionary extends React.Component{
  state = {
    word: "",
    definitions: [],
    searched: false
  }

  handleSubmit = (e) => {
    const trimmedWord = this.state.word.trim()
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/dictionary`, {
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
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.word} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <DefinitionList definitions={this.state.definitions} searched={this.state.searched}/>
      </div>
    )
  }
}

export default Dictionary
