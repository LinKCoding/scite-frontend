import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect } from 'react-router-dom'

class UserLogin extends React.Component {
  state = {
    email: "",
    password: "",
    navigating: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.login({email, password})
    this.setState({
      navigating: true
    })
    //check route and redirect if log in went through, i.e. loggedIn === "true"
  }

  render(){
    if(this.state.navigating){
      console.log(this.state)
      console.log(this.props.location.pathname);
      return <Redirect to="/articles" />
    } else {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">
            Email:
          </label>
          <input className="inputField" type="text" name="email" onChange={this.handleChange} value={this.state.email}/> <br/>
          <label className="label">
            Password:
          </label>
          <input className="inputField" type="password" name="password" onChange={this.handleChange} value={this.state.password}/> <br/>
          <input className="fsSubmitButton" type="submit" value="Submit" />
        </form>
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    login: (user) => {
      dispatch(login(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserLogin)
