import React from 'react'
import ArticleItem from './ArticleItem'
import { Header, Table } from 'semantic-ui-react'

class ArticleList extends React.Component{
  render(){
    if(this.props.articles){
      return(
        <Table.Body>
            {this.props.articles.map((article, index)=>{ return <ArticleItem info={article} key={`article-${index}`} noteList={this.props.notes}/>})}
        </Table.Body>
      )
    } else {
      return null
    }
  }
}

// {this.props.articles.map((article, index)=>{ return <ArticleItem info={article} key={`article-${index}`} noteList={this.props.notes}/>})}

export default ArticleList
