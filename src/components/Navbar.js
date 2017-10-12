import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    this.props.logOut()
  }
  render() {
    return(
      <div>
        <NavLink to="/articles"> Articles </NavLink>
        <NavLink to="/lexicon"> Lexicon </NavLink>
        <NavLink to="/notes"> Notes </NavLink>
        <NavLink to="/signup"> Signup </NavLink>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/" onClick={this.logOut}> Logout </NavLink>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
