import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createNote } from '../../actions/note'
import { Table, Image, Button, Container } from 'semantic-ui-react'

class ArticleItem extends React.Component {
  state = {
    navigating: false,
  }

  handleClick = () => {
    this.props.createNote(this.props.info)
    this.setState({
      navigating: true
    })
  }

  render(){
    const { id, name, thumbnail, created_at } = this.props.info
    const formated_date = created_at.split("T")[0]
    const checkForNote = this.props.noteList.some(note => note.article_id === id)
    const selectedNote = this.props.noteList.filter((note) => note.article_id)[0]

    console.log(this.props);
    if(this.state.navigating && this.props.note.note ){
      console.log(this.props.note);
      return <Redirect to={`/notes/${this.props.note.note.id}`} />
    } else {
      return(
        <Table.Row>
          <Table.Cell textAlign="center"><img src={thumbnail} alt={name} style={{height:'40px', width:'40px'}}/></Table.Cell>
          <Table.Cell singleLine textAlign="center">
            {formated_date}
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell textAlign="center">{checkForNote ?
            <Button color="blue" inverted><Link to={`notes/${selectedNote.id}`}>Edit Note</Link></Button> :
            <Button color="green" compact onClick={this.handleClick}>Start a note!</Button>
          }
          </Table.Cell>
        </Table.Row>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    note: state.note.currentNote,
    fetching: state.note.fetchingNotes,
  }
}

function mapDispatchToProps(dispatch){
  return {
    createNote: (article)=> {
      dispatch(createNote(article))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleItem))
