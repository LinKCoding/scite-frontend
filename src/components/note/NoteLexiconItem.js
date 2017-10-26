import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteLexicon } from '../../actions/lexicon'
import { List, Button, Confirm } from 'semantic-ui-react'


class NoteLexiconItem extends React.Component{
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    this.props.deleteLexicon(this.props.word.id)
    this.setState({
      open: false
    })
  }
  handleCancel = () => {
    this.setState({
      open: false
    })
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
            <Button color="red" onClick={this.show} size="mini" circular icon="trash outline"></Button>
            <Confirm
                content={`You're about to delete "${word}" from your lexicon, are you sure?`}
                open={this.state.open}
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
              />
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
