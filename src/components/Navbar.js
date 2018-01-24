import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import logo from './scite-icon.png'


class Navbar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    let link = this.state.activeItem === 'home' ? '' : this.state.activeItem
    this.props.history.push(`/${link}`)
  }

  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    localStorage.removeItem('name')
    this.props.logOut()
    this.props.history.push("/login")
  }

  render() {
    const { activeItem } = this.state
    if(localStorage.getItem('jwt')){
      return(
        <Menu color='teal' inverted>
          <NavLink to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Image src={logo} style={{width:'29px',height:'20px'}} />
            </Menu.Item></NavLink>
          <NavLink to="/articles">
            <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
              <p> Articles </p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/lexicon">
            <Menu.Item name='lexicon' active={activeItem === 'lexicon'} onClick={this.handleItemClick}>
              <p>Lexicon</p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/notes">
            <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
              <p> Notes </p>
            </Menu.Item>
          </NavLink>
          <Menu.Menu position="right">
            <Menu.Item >
              <h5>
                Hi, {localStorage.getItem('name')}
              </h5>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/" onClick={this.logOut}> Logout </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    } else {
      return(
        <Menu color='teal' inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Image src={logo} style={{width:'29px',height:'20px'}} />
          </Menu.Item>
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

export default withRouter(connect(null, mapDispatchToProps)(Navbar))
