import React from 'react'

class LexiconItem extends React.Component{
  render(){
    return(
      <div>
        <span>Word: {this.props.word.word}</span><br/>
        <span>Definition: {this.props.word.definition}</span>
      </div>
    )
  }
}

export default LexiconItem
