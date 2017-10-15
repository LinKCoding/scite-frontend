import React from 'react'

class ArticleWindow extends React.Component {

  render() {

    if(this.props.article) {
    return(
      <object data={this.props.article.url} />
    )} else {
      return null
    }

  }
}

export default ArticleWindow 
