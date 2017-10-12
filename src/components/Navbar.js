import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <NavLink to="/articles"> Articles </NavLink>
        <NavLink to="/lexicon"> Lexicon </NavLink>
        <NavLink to="/notes"> Notes </NavLink>
        <NavLink to="/signup"> Signup </NavLink>
        <NavLink to="/login"> Login </NavLink>
      </div>
    )
  }
}

export default Navbar
