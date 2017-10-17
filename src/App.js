import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserSignUp from './components/user/UserSignUp'
import UserLogin from './components/user/UserLogin'
import Homepage from './components/Homepage'
import { connect } from 'react-redux'
import ArticleContainer from './components/article/ArticleContainer'
import LexiconContainer from './components/lexicon/LexiconContainer'
import NoteContainer from './components/note/NoteContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navbar}/>
        <Route path="/articles" component={ArticleContainer}/>
        <Route path="/lexicon" component={LexiconContainer}/>
        <Route path="/notes" component={NoteContainer}/>

        <Route path='/signup' component={UserSignUp} />
        <Route path='/login' component={UserLogin} />
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default App;
