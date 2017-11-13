import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { fetchArticles } from '../../actions/article'
import { fetchNotes } from '../../actions/note'
import { Grid, Dimmer, Loader } from 'semantic-ui-react'


class ArticleContainer extends React.Component {
  componentDidMount(){
    this.props.fetchArticles()
    this.props.fetchNotes()
  }
  render(){
    if(this.props.articles.length > 0){
      return(
        <Grid>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            <ArticleList articles={this.props.articles} notes={this.props.notes}/>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid>
      )
    } else {
      return (
        <Dimmer active>
          <Loader size="large">Loading</Loader>
        </Dimmer>
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
