import React from 'react'
import NoteLexiconItem from './NoteLexiconItem'

const NoteLexicon = (props) => {
  console.log(props);
  if(props.lexicon){

    return(
      props.lexicon.map((word) => {
        return <NoteLexiconItem word={word}/>
      })
    )
  } else {
    return null
  }
}

export default NoteLexicon
