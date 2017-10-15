import React from 'react'

class Dictionary extends React.Component{
  state = {
    word: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      word: e.target.value
    })
  }


  render(){
    console.log(this.state);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.word} onChange={this.handleChange}/>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default Dictionary
