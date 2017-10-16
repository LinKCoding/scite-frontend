import React from 'react'

class Definition extends React.Component{
  render(){
    const {type, defenition, example} = this.props.definition
    console.log(this.props);
    return(
      <li>
        <p>{type}</p>
        <p>{defenition}</p>
      </li>
    )
  }
}

export default Definition
