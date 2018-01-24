import React from 'react'
import ArticleWindow  from './ArticleWindow'
import { connect } from 'react-redux'
import { fetchArticlesAndSetLatest } from '../actions/article'
import { createNote, fetchNotes } from '../actions/note'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Segment, Button, Dimmer, Loader } from 'semantic-ui-react'



class Homepage extends React.Component {

  componentDidMount(){
    this.props.fetchArticlesAndSetLatest()
    this.props.fetchNotes()
  }

  handleClick = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    this.props.createNote(latestArticle, this.props.history)
  }

  checkForNote = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    return this.props.allNotes.notes.some(note => {
      return note.article_id === latestArticle.id
    })
  }

  findNoteID = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    const rightNote = this.props.allNotes.notes.filter(note => note.article_id === latestArticle.id)[0]

    return rightNote.id
  }

  render(){
    const { articles } = this.props

    if(this.props.allNotes.fetchedNotes && this.props.articles[0]){
      return (
        <Grid centered columns={2} >
          <p style={{color:"white"}}>Note: The free trial API sourcing the articles expired, there will not be any new articles or pictures. Thanks for understanding. If you want to continue working on this project, find my contact info at kennylin.me!</p>
          <Grid.Row className="button-font">
            <Segment color="teal" inverted className="button-font">
              <h3>
                Article of the Day: "{articles[articles.length-1].name}"
              </h3>
            </Segment>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column ref="homepage">
              {articles.length !== 0 ?
                <ArticleWindow article={articles[articles.length - 1]} height={`${window.innerHeight*2/3}vh`}/> :
                  <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                  </Dimmer>
              }

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign="center">
              {this.checkForNote() ?
                  <Button color="blue" inverted><Link to={`/notes/${this.findNoteID()}`}>Edit Note</Link></Button> :
                  <Button color="green" onClick={this.handleClick}>Start on a new note!</Button>
              }
            </Grid.Column>
          </Grid.Row>

        </Grid>
      )
    } else {
      return (
        <Dimmer active>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      )
    }
  }
}



function mapStateToProps(state){
  return {
    articles: state.article.articles,
    currentNote: state.note.currentNote,
    allNotes: state.note,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchArticlesAndSetLatest: () => {
      dispatch(fetchArticlesAndSetLatest())
    },
    createNote: (article, history)=> {
      dispatch(createNote(article, history))
    },
    fetchNotes: () => {
      dispatch(fetchNotes())
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage))
