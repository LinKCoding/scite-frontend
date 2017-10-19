import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { fetchArticles } from '../../actions/article'
import { fetchNotes } from '../../actions/note'


class ArticleContainer extends React.Component {
  componentDidMount(){
    this.props.fetchArticles()
    this.props.fetchNotes()
  }
  render(){
    if(this.props.articles.length > 0){
      return(
        <div>
          <ArticleList articles={this.props.articles} notes={this.props.notes}/>
        </div>
      )
    } else {
      return (
        <h3>loading...</h3>
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
    },
    fetchNotes: () => {
      dispatch(fetchNotes())
    }
  }
}

function mapStateToProps(state){
  return {
    articles: state.article.articles,
    notes: state.note.notes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
