import React from 'react'
import LexiconItem from '../lexicon/LexiconItem'

const NoteLexicon = (props) => {
  console.log(props);
  if(props.lexicon){

    return(
      props.lexicon.map((word) => {
        return <LexiconItem word={word}/>
      })
    )
  } else {
    return null
  }
}

export default NoteLexicon
