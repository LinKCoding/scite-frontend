import React from 'react'
import { Link } from 'react-router-dom'

class Definition extends React.Component{
  render(){
    const {type, defenition} = this.props.definition
    return(
      <li>
        <p>{type}</p>
        <p>{defenition}</p>
      </li>
    )
  }
}

export default Definition
