import React from 'react'
import Definition from './Definition'

const DefinitionList = (props) => {
  if(props.definitions.length === 0){
    return null
  } else {
    return(
    <ul>
      { props.definitions.map((definition, index) => {
        return <Definition key={index} definition={definition} />
      }) }
    </ul>
    )
  }

}

export default DefinitionList
