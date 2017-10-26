import React from 'react'
import { Segment, Label } from 'semantic-ui-react'

class ArticleWindow extends React.Component {

  render() {
    if(this.props.article) {
      const { height, width } = this.props.dimensions
    return(
      <Segment id="article">

        <object height={height} width={width} data={this.props.article.url} > {this.props.homepage ?  <Label as='a' color='teal' ribbon>Article of the day</Label> : null} Article goes here</object>
      </Segment>
    )} else {
      return null
    }

  }
}

export default ArticleWindow
