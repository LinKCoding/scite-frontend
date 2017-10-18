import React from 'react'
import LexiconItem from './LexiconItem'

const LexiconList = (props) => {
  return(
    <table >
      <tr>
        <th>Word</th>
        <th>Definition</th>
        <th>Edit Article</th>
      </tr>
      {
        props.lexicon.map( word => {
          return <LexiconItem word={word}/>
        })
      }
    </table>
  )
}

export default LexiconList
