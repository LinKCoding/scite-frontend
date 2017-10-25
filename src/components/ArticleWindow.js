import React from 'react'
import { Segment } from 'semantic-ui-react'

class ArticleWindow extends React.Component {

  render() {

    if(this.props.article) {
      console.log(this.props);
      const { height, width } = this.props.dimensions
    return(
      <Segment id="article">
        <object height={height} width={width} data={this.props.article.url} >Article goes here</object>
      </Segment>
    )} else {
      return null
    }

  }
}

export default ArticleWindow
