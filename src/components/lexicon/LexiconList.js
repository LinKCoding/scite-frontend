import React from 'react'
import LexiconItem from './LexiconItem'
import { Table, Button } from 'semantic-ui-react'

const LexiconList = (props) => {
  // debugger
  if (props.lexicon.list.error) {
    return(
      <h1>Looks like you haven't made any notes yet, start on an article?</h1>
    )
  } else {
    return(
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Word</Table.HeaderCell>
            <Table.HeaderCell>Definition</Table.HeaderCell>
            <Table.HeaderCell>Go to note</Table.HeaderCell>
            <Table.HeaderCell>Remove from lexicon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            props.lexicon.list.map( (word,index) => {
              return <LexiconItem key={`lexicon-${index}`} word={word}/>
            })
          }
        </Table.Body>
      </Table>
    )
  }
}

export default LexiconList
