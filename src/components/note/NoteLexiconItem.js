import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'


class NoteLexiconItem extends React.Component{
  handleClick = () => {
    this.props.deleteLexicon(this.props.word.id)
  }

  render(){
    const { word, definition, id } = this.props.word
    return(
      <div>
        <span>Word: {word}</span><br/>
        <span>Definition: {definition}</span><br/>
        <span><Link to={`/lexicon/${id}`}> Edit</Link></span> <br/>
        <button onClick={this.handleClick}>Delete</button><br/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteLexicon: (lexiconID) => {
      dispatch(deleteLexicon(lexiconID))
    }
  }
}

export default connect(null, mapDispatchToProps)(NoteLexiconItem)
