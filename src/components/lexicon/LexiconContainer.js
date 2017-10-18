import React from 'react'
import { Route } from 'react-router-dom'
import LexiconList from './LexiconList'
import { connect } from 'react-redux'
import { fetchedLexicon } from '../../actions/lexicon'

class LexiconContainer extends React.Component {

  componentDidMount(){
    this.props.fetchedLexicon()
  }

  render(){
    if(this.props.lexicon.length !== 0) {
      return(
        <div>
          <Route path='/lexicon' render={(props) => <LexiconList routerProps={props} lexicon={this.props.lexicon} /> } />
        </div>
      )
    } else {
      return (
        <h3> loading </h3>
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchedLexicon: () => {
      dispatch(fetchedLexicon())
    }
  }
}

function mapStateToProps(state){
  return {
    lexicon: state.lexicon.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LexiconContainer)
