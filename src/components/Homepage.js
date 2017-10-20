import React from 'react'
import ArticleWindow  from './ArticleWindow'
import CreateNewNote from './CreateNewNote'
import { connect } from 'react-redux'
import { fetchArticlesAndSetLatest } from '../actions/article'
import { createNote, fetchNotes } from '../actions/note'
import { Link, Redirect } from 'react-router-dom'



class Homepage extends React.Component {
  state = {
    navigating: false,
  }

  componentDidMount(){
    this.props.fetchArticlesAndSetLatest()
    this.props.fetchNotes()
  }



  handleClick = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    console.log(this.props);
    this.props.createNote(latestArticle)
    this.setState({
      navigating: true
    })
  }

  checkForNote = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    return this.props.allNotes.notes.some(note => {
      return note.article_id === latestArticle.id
    })
  }

  handleRouting = () => {
    if(this.checkForNote()){
      const noteID = this.props.allNotes.filter(note => note.article_id === this.latestArticle().id)[0]
      return (
        <Link to={`/notes${noteID}`}>Edit Note</Link>
      )
    } else {
      return(
        <button onClick={this.handleClick}> Start on a new note! </button>
      )
    }
  }

  render(){
    console.log(this.props.allNotes);
    const { articles } = this.props
    const { navigating } = this.state
    if(navigating && this.props.currentNote.note){
      return <Redirect to={`/notes/${this.props.currentNote.note.id}`} push={true}/>
    } else if(this.props.allNotes.fetchedNotes){
      console.log("rendering b/c 2");
      console.log(this.checkForNote(), this.props.allNotes.notes);
      return (
        <div>
          <span> ARTICLE OF THE DAY </span>
          <ArticleWindow article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>
          {this.checkForNote() ?
            <Link to={`/notes/1`}>Edit Note</Link> :
            <button onClick={this.handleClick}> Start on a new note! </button>
          }
        </div>
      )
    } else {
      console.log("logging last");
      return <h3>loading...</h3>
    }
  }
}



function mapStateToProps(state){
  return {
    articles: state.article.articles,
    currentNote: state.note.currentNote,
    allNotes: state.note,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticlesAndSetLatest: () => {
      dispatch(fetchArticlesAndSetLatest())
    },
    createNote: (article)=> {
      dispatch(createNote(article))
    },
    fetchNotes: () => {
      dispatch(fetchNotes())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
