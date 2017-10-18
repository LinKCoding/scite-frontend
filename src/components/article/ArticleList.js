import React from 'react'
import { Link } from 'react-router-dom'

class ArticleList extends React.Component{
  render(){
    return(
      <div>
        PLACEHOLDER FOR TABLE:
        <br/>
        {this.props.articles ?
        this.props.articles.map((article) =>{
          return article.name
        })
        : null
        }
      </div>
    )
  }
}

export default ArticleList
