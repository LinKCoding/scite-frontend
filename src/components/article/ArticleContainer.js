import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { fetchArticles } from '../../actions/article'
import { fetchNotes } from '../../actions/note'
import { Icon, Table } from 'semantic-ui-react'


class ArticleContainer extends React.Component {
  componentDidMount(){
    this.props.fetchArticles()
    this.props.fetchNotes()
  }
  render(){
    if(this.props.articles.length > 0){
      return(
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Date</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>Image</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>Title</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <ArticleList articles={this.props.articles} notes={this.props.notes}/>
        </Table>
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
