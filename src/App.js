import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserSignUp from './components/user/UserSignUp'
import UserLogin from './components/user/UserLogin'
import Homepage from './components/Homepage'
import Authorize from './Authorize'
import ArticleContainer from './components/article/ArticleContainer'
import LexiconContainer from './components/lexicon/LexiconContainer'
import NoteContainer from './components/note/NoteContainer'

class App extends Component {
  render() {

    const AuthArticleContainer = Authorize(ArticleContainer)
    const AuthLexiconContainer = Authorize(LexiconContainer)
    const AuthNoteContainer = Authorize(NoteContainer)
    const AuthHomepage = Authorize(Homepage)
    const AuthLogin = Authorize(UserLogin)
    const AuthSignUp = Authorize(UserSignUp)
    return (
      <div className="App">
        <Route path="/" component={Navbar}/>
        <Route path="/articles" render={(props) => <AuthArticleContainer {...props}/>}/>
        <Route path="/lexicon" render={(props) => <AuthLexiconContainer {...props}/>}/>
        <Route path="/notes" render={(props) => <AuthNoteContainer {...props}/>}/>

        <Route exact path="/signup" render={(props) => <AuthSignUp {...props}/>}/>
        <Route exact path="/login" render={(props) => <AuthLogin {...props}/>}/>
        <Route exact path="/" render={(props) => <AuthHomepage {...props}/>}/>
      </div>
    );
  }
}

export default App;
