import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { NavLink, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    this.props.logOut()
    this.props.history.push("/login")
  }

  render() {
    const { activeItem } = this.state
    if(localStorage.getItem('jwt')){
      return(
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <NavLink to="/"> Homepage </NavLink>
          </Menu.Item>
          <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
            <NavLink to="/articles"> Articles </NavLink>
          </Menu.Item>
          <Menu.Item name='lexicon' active={activeItem === 'lexicon'} onClick={this.handleItemClick}>
            <NavLink to="/lexicon"> Lexicon </NavLink>
          </Menu.Item>
          <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
            <NavLink to="/notes"> Notes </NavLink>
          </Menu.Item>
          <Menu.Item position="right">
            <NavLink to="/" onClick={this.logOut}> Logout </NavLink>
          </Menu.Item>
        </Menu>
      )
    } else {
      return(
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
              <NavLink to="/signup"> Signup </NavLink>
            </Menu.Item>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
              <NavLink to="/login"> Login </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
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
