import React from 'react'
import Definition from './Definition'

const DefinitionList = (props) => {
  console.log(props.definition);
  if(props.definitions.error || (props.definitions.length === 0 && props.searched)){
    return <p>No definition found, check your spelling and try again? (currently, we can only search one word at a time!)</p>
  } else {
    return(
    <ul>
      { props.definitions.map((definition, index) => {
        return <Definition key={`definition-${index}`} definition={definition} />
      }) }
    </ul>
    )
  }

}

export default DefinitionList
