import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createNote } from '../../actions/note'

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

    // console.log(this.props);
    if(this.state.navigating && this.props.note.note){
      console.log(this.props.note);
      return <Redirect to={`/notes/${this.props.note.note.id}`} push={true}/>
    } else {
      return(
        <tr>
          <td>{formated_date}</td>
          <td><img src={thumbnail} alt={name}/></td>
          <td>{name}</td>
          <td>{checkForNote ?
            <Link to={`notes/${selectedNote.id}`}>Edit Note</Link> :
            <button onClick={this.handleClick}>Start a note!</button>
          }
          </td>
        </tr>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    note: state.note.currentNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    createNote: (article)=> {
      dispatch(createNote(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem)
