import React from 'react'

class Article extends React.Component {

  render() {

    if(this.props.article) {
    return(
      <object data={this.props.article.url} />
    )} else {
      return null
    }

  }
}

export default Article
