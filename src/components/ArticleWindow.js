import React from 'react'

class ArticleWindow extends React.Component {

  render() {

    if(this.props.article) {
    return(
      <object data={this.props.article.url} >Article goes here</object>
    )} else {
      return null
    }

  }
}

export default ArticleWindow
