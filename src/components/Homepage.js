import React from 'react'
import Article from './Article'
import CreateNewNote from './CreateNewNote'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/article'


class Homepage extends React.Component {
  componentDidMount(){
    this.props.fetchArticles()
  }

  render(){
    let { articles } = this.props
    return (
      <div>
        <span> ARTICLE OF THE DAY </span>
        <Article article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>
        <CreateNewNote article_id={ articles.length !== 0 ? articles[articles.length - 1].id : null }/>
      </div>
    )
  }
}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
