import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'

class LexiconItem extends React.Component{
  handleClick = () => {
    const response = window.confirm("You're about to delete this from your lexicon, are you sure?")
    response ? this.props.deleteLexicon(this.props.word.id) : null 
  }

  render(){
    const { word, definition, note_id, id} = this.props.word
    return(
      <tr>
        <th><Link to={`/lexicon/${id}`}>{word}</Link></th>
        <th>{definition}</th>
        <th><Link to={`/notes/${note_id}`}>Edit</Link></th>
        <th><button onClick={this.handleClick}>Delete</button><br/></th>
      </tr>
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

export default connect(null, mapDispatchToProps)(LexiconItem)
