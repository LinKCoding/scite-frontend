import React from 'react'
import LexiconList from './LexiconList'
import LexiconDetail from './LexiconDetail'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchedLexicon } from '../../actions/lexicon'
import { Grid, Segment } from 'semantic-ui-react'

class LexiconContainer extends React.Component {

  componentDidMount(){
    this.props.fetchedLexicon()
  }

  render(){
    const { lexicon } = this.props
    if(lexicon.fetchedLexicon) {
      if(lexicon.list.length === 0) {
        return (
          <Grid>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <Segment>
                <h3> Looks like your lexicon's empty, check out an <Link to="/articles">article</Link> or edit your <Link to="/notes">notes</Link> add to it!</h3>
              </Segment>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid>)
      } else {
        return(
          <Grid>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
            <Route exact path='/lexicon' render={(props) => <LexiconList routerProps={props} lexicon={lexicon} /> } />
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            <Route path='/lexicon/:id' render={(props)=> {
                const id = props.match.params.id
                const word = lexicon.list.filter((word) => {
                  return word.id === parseInt(id, 10)
                })[0]
                const note = this.props.notes.filter(note => note.id === word.note_id)[0]

                return <LexiconDetail routerProps={props} word={word} note={note}/>   }} />
          </Grid>
        )
      }
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
    lexicon: state.lexicon,
    notes: state.note.notes
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LexiconContainer)
