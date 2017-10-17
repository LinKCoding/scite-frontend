import React from 'react'
import ArticleWindow  from './ArticleWindow'
import CreateNewNote from './CreateNewNote'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/article'
import { createNote } from '../actions/note'
import { Redirect } from 'react-router-dom'



class Homepage extends React.Component {
  state = {
    navigating: false,
    latestArticle: {}
  }

  componentDidMount(){
    this.props.fetchArticles()
  }

  handleClick = () => {
    console.log(this.props.articles[this.props.articles.length-1]);
    this.props.createNote(this.props.articles[this.props.articles.length-1])
    this.setState({
      navigating: true,
      latestArticle: this.props.articles[this.props.articles.length-1]
    })
  }

  render(){
    const { articles } = this.props
    const { navigating } = this.state

    if(navigating){
      console.log("hitting this");
      return <Redirect to="/notes/" push={true}/>
    } else {
      return (
        <div>
          <span> ARTICLE OF THE DAY </span>
          <ArticleWindow article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>
          <button onClick={this.handleClick}> Start on a new note! </button>
        </div>
      )
    }
  }
}
// <CreateNewNote article_id={ articles.length !== 0 ? articles[articles.length - 1].id : null }/>
//smart component to be sent current article of the day and save it to store

function mapStateToProps(state){
  return {
    articles: state.article.articles
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
    },
    createNote: (article)=> {
      dispatch(createNote(article))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
