import React from 'react'
import LexiconItem from './LexiconItem'

const LexiconList = (props) => {
  if (props.lexicon.error) {
    return(
      <h1>Looks like you haven't made any notes yet, start on an article?</h1>
    )
  } else {
    return(
      <table >
        <tbody>
          <tr>
            <th>Word</th>
            <th>Definition</th>
            <th>Go to note</th>
            <th>Remove from lexicon</th>
          </tr>
          {
            props.lexicon.map( (word,index) => {
              return <LexiconItem key={`lexicon-${index}`} word={word}/>
            })
          }
        </tbody>
      </table>
    )
  }
}

export default LexiconList
