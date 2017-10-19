import React from 'react'
import LexiconItem from './LexiconItem'

const LexiconList = (props) => {
  return(
    <table >
      <tbody>
        <tr>
          <th>Word</th>
          <th>Definition</th>
          <th>Go to note</th>
        </tr>
        {
          props.lexicon.map( word => {
            return <LexiconItem word={word}/>
          })
        }
      </tbody>
    </table>
  )
}

export default LexiconList
