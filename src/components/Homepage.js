import React from 'react'
import ArticleWindow  from './ArticleWindow'
import CreateNewNote from './CreateNewNote'
import { connect } from 'react-redux'
import { fetchArticlesAndSetLatest } from '../actions/article'
import { createNote } from '../actions/note'
import { Redirect } from 'react-router-dom'



class Homepage extends React.Component {
  state = {
    navigating: false,
    latestArticle: {},
    currentNote: {}
  }

  componentDidMount(){
    this.props.fetchArticlesAndSetLatest()

  }

  handleClick = () => {
    console.log(this.props);
    this.props.createNote(this.props.articles[this.props.articles.length-1])
    this.setState({
      navigating: true
    })
  }

  render(){
    const { articles } = this.props
    const { navigating } = this.state
    console.log(this.props);
    if(navigating && this.props.note.note){
      return <Redirect to={`/notes/${this.props.note.note.id}`} push={true}/>
    } else {
      return (
        <div>
          <span> ARTICLE OF THE DAY </span>
          {/*<ArticleWindow article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>*/}
          <button onClick={this.handleClick}> Start on a new note! </button>
        </div>
      )
    }
  }
}


function mapStateToProps(state){
  return {
    articles: state.article.articles,
    note: state.note.currentNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticlesAndSetLatest: () => {
      dispatch(fetchArticlesAndSetLatest())
    },
    createNote: (article)=> {
      dispatch(createNote(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
