import React from 'react'
import ArticleItem from './ArticleItem'
import { Header, Table } from 'semantic-ui-react'

class ArticleList extends React.Component{
  render(){
    if(this.props.articles){
      return(
        <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Note</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {this.props.articles.map((article, index)=>{ return <ArticleItem info={article} key={`article-${index}`} noteList={this.props.notes}/>})}
        </Table.Body>
        </Table>
      )
    } else {
      return null
    }
  }
}

// {this.props.articles.map((article, index)=>{ return <ArticleItem info={article} key={`article-${index}`} noteList={this.props.notes}/>})}

export default ArticleList
