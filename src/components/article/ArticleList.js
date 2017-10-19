import React from 'react'
import ArticleItem from './ArticleItem'
import { Link } from 'react-router-dom'

class ArticleList extends React.Component{
  render(){
    if(this.props.articles){
      return(
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Image</th>
              <th>Title</th>
              <th>Note</th>
            </tr>
            {this.props.articles.map((article)=>{ return <ArticleItem info={article} noteList={this.props.notes}/>})}
          </tbody>
        </table>
      )
    } else {
      return null
    }
  }
}
// <div>
//   PLACEHOLDER FOR TABLE:
//   <br/>
//   {this.props.articles ?
//     this.props.articles.map((article) =>{
//       return article.name
//     })
//     : null
//   }
// </div>

export default ArticleList
