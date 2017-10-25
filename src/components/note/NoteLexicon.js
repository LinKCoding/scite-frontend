import React from 'react'
import NoteLexiconItem from './NoteLexiconItem'
import { List } from 'semantic-ui-react'

const NoteLexicon = (props) => {
  console.log(props);
  if(props.lexicon){

    return(
      <List>
        {props.lexicon.map((word) => {
          return <NoteLexiconItem word={word}/>
        })}
      </List>
    )
  } else {
    return null
  }
}

export default NoteLexicon
