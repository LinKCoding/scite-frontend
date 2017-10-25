import React from 'react'
import ArticleWindow  from './ArticleWindow'
import './Homepage.css'
import { connect } from 'react-redux'
import { fetchArticlesAndSetLatest } from '../actions/article'
import { createNote, fetchNotes } from '../actions/note'
import { Link, Redirect } from 'react-router-dom'
import { Grid,Header, Segment, Button, Dimmer, Loader } from 'semantic-ui-react'



class Homepage extends React.Component {
  state = {
    navigating: false,
  }

  componentDidMount(){
    this.props.fetchArticlesAndSetLatest()
    this.props.fetchNotes()
  }



  handleClick = () => {
    const latestArticle =  this.props.articles[this.props.articles.length-1]
    this.props.createNote(latestArticle)
    this.setState({
      navigating: true
    })
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
    const { navigating } = this.state
    if(navigating && this.props.currentNote.note){
      return <Redirect to={`/notes/${this.props.currentNote.note.id}`} push={true}/>
    } else if(this.props.allNotes.fetchedNotes && this.props.articles[0]){
      return (
        <Grid centered columns={2} >
          <Grid.Row className="button-font">
            <Segment color="teal" inverted className="button-font">
              <Header as='h3' textAlign='center' className="button-font">
                Article of the Day:
              </Header>
            </Segment>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {articles.length !== 0 ?
                <ArticleWindow  article={articles[articles.length - 1]} dimensions={{height:'600vh', width:'800vh'}} /> :
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
      console.log("logging last");
      return <h3>loading...</h3>
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
    createNote: (article)=> {
      dispatch(createNote(article))
    },
    fetchNotes: () => {
      dispatch(fetchNotes())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

// <ArticleWindow  article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>

// <Grid centered columns={2}>
//   <Grid.Row centered columns={2} >
//     <Grid.Column>
//       <span> ARTICLE OF THE DAY </span>
//     </Grid.Column>
//   </Grid.Row>
//
//   <Grid.Row>
//     <Grid.Column>
//       <ArticleWindow  article={ articles.length !== 0 ? articles[articles.length - 1] : null}/>
//     </Grid.Column>
//   </Grid.Row>
//
  // <Grid.Row>
  //   {this.checkForNote() ?
  //     <Grid.Column>
  //       <Link to={`/notes/${this.findNoteID()}`}>Edit Note</Link>
  //     </Grid.Column> :
  //     <Grid.Column>
  //       <button onClick={this.handleClick}> Start on a new note! </button>
  //     </Grid.Column>
  //   }
  // </Grid.Row>
// </Grid>
