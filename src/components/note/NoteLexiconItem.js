import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'
import { List, Button } from 'semantic-ui-react'


class NoteLexiconItem extends React.Component{
  handleClick = () => {
    const response = window.confirm("You're about to delete this from your lexicon, are you sure?")
    {response ?
    this.props.deleteLexicon(this.props.word.id) : null }
  }

  handleRedirect = () => {
    this.props.history.push(`/lexicon/${this.props.word.id}`)
  }

  render(){

    const { word, definition, id } = this.props.word
    return(
      <List.Item>
        <List.Icon name='cloud' />
        <List.Content>
          <List.Description>
            {word} - {definition}
            <Button color="blue"  onClick={this.handleRedirect} size="mini" circular icon="write"></Button>
            <Button color="red" onClick={this.handleClick} size="mini" circular icon="trash outline"></Button>
          </List.Description>
        </List.Content>
      </List.Item>
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

export default withRouter(connect(null, mapDispatchToProps)(NoteLexiconItem))
