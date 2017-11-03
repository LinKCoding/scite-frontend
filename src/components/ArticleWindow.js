import React from 'react'
import { Segment, Label } from 'semantic-ui-react'

class ArticleWindow extends React.Component {

  render() {
    console.log(this.refs.child);
    console.log(this.props);
    console.log(window.innerHeight);
    if(this.props.article) {
      const { height } = this.props
    return(
      <Segment id="article" ref="child" height="100%">
        <object height={height} width={"100%"} data={this.props.article.url} > {this.props.homepage ?  <Label as='a' color='teal' ribbon>Article of the day</Label> : null} Article goes here</object>
      </Segment>
    )} else {
      return null
    }

  }
}

export default ArticleWindow
