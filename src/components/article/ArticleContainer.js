import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { fetchArticles } from '../../actions/article'


class ArticleContainer extends React.Component {
  componentDidMount(){
    this.props.fetchArticles()
  }
  render(){
    console.log(this.props.articles);
    return(

      <div>
        <ArticleList articles={this.props.articles ? this.props.articles : null}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
    }
  }
}

function mapStateToProps(state){
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
