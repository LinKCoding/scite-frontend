import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserSignUp from './components/user/UserSignUp'
import UserLogin from './components/user/UserLogin'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navbar}/>
        <Route path='/signup' component={UserSignUp} />
        <Route path='/login' component={UserLogin} />
      </div>
    );
  }
}

export default App;
