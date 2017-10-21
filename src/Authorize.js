import React from 'react'
import UserSignUp from './components/user/UserSignUp'
import { Redirect } from 'react-router-dom'


function Authorize(RenderedComponent, props) {
  return class extends React.Component {

    render() {
      if (localStorage.getItem('jwt') && (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup")) {
        return <Redirect to="/" />
      } else if (!localStorage.getItem('jwt') && this.props.location.pathname !== "/login") {
        if(this.props.location.pathname === "/signup"){
          return <UserSignUp />
        } else {
          return <Redirect to="/login" />
        }
      } else {
        return (
          <RenderedComponent {...this.props} {...props}/>
        )
      }
    }
  }
}

export default Authorize
