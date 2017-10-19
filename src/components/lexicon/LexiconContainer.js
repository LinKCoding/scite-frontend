import React from 'react'
import LexiconList from './LexiconList'
import LexiconDetail from './LexiconDetail'
import { Route } from 'react-router-dom'
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
          <Route exact path='/lexicon' render={(props) => <LexiconList routerProps={props} lexicon={this.props.lexicon} /> } />
          <Route path='/lexicon/:id' render={(props)=> {
              const id = props.match.params.id
              const word = this.props.lexicon.filter((word) => {
                return word.id === parseInt(id, 10)
              })[0]

              return <LexiconDetail routerProps={props} word={word}/>  }} />
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
