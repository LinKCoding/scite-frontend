import React from 'react'
import { List } from 'semantic-ui-react'

class Definition extends React.Component{
  render(){
    const {type, defenition} = this.props.definition
    return(
      <List.Item>
        <List.Icon name='cloud' />
        <List.Content>
          <List.Description>
            {type} - {defenition}
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default Definition
