import React from 'react'
import { Route } from 'react-router-dom'
import LexiconList from './LexiconList'
import { connect } from 'react-redux'

class LexiconContainer extends React.Component {
  render(){
    console.log("this is hitting");
    return(
      <div>
        <Route path='/lexicon' render={(props) => <LexiconList routerProps={props} /> } />

      </div>
    )
  }
}

export default connect()(LexiconContainer)
