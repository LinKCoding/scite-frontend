import React from 'react'
import Definition from './Definition'
import { List } from 'semantic-ui-react'

const DefinitionList = (props) => {
  if(props.definitions.error || (props.definitions.length === 0 && props.searched)){
    return <p>No definition found, check your spelling and try again? (currently, we can only search one word at a time!)</p>
  } else {
    return(
      <List>
        { props.definitions.map((definition, index) => {
          return <Definition key={`definition-${index}`} definition={definition} />
        }) }
      </List>
    )
  }

}

export default DefinitionList
