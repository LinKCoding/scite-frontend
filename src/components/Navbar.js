import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { NavLink, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  state = {
    navigating: false
  }

  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    this.props.logOut()
    // this.setState({
    //   navigating: true
    // })
    this.props.history.push("/login")
  }

  render() {
    if(this.state.navigating){
      return <Redirect exact to='/' push={true}/>
    } else if(localStorage.getItem('jwt')){
      return(
        <Menu>
          <Menu.Item >
            <NavLink to="/"> Homepage </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/articles"> Articles </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/lexicon"> Lexicon </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/notes"> Notes </NavLink>
          </Menu.Item>
          <Menu.Item position="right">
            <NavLink to="/" onClick={this.logOut}> Logout </NavLink>
          </Menu.Item>

        </Menu>
      )
    } else {
      return(
        <div>
          <NavLink to="/signup"> Signup </NavLink>
          <NavLink to="/login"> Login </NavLink>
        </div>
      )
    }
  }

}
//


// render(){
//   return(
//     <div>
//       <NavLink to="/"> Homepage </NavLink>
//       <NavLink to="/articles"> Articles </NavLink>
//       <NavLink to="/lexicon"> Lexicon </NavLink>
//       <NavLink to="/notes"> Notes </NavLink>
//       <NavLink to="/signup"> Signup </NavLink>
//       <NavLink to="/login"> Login </NavLink>
//       <NavLink to="/" onClick={this.logOut}> Logout </NavLink>
//     </div>
//   )
// }

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
