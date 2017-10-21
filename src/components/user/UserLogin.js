import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/user'

class UserLogin extends React.Component {
  state = {
    email: "",
    password: ""
  }

  changeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  changePassword = (event) => {
    this.setState({
      password: event.target.value})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
    //check route and redirect if log in went through, i.e. loggedIn === "true"
  }

  render(){
    return (<form className="form" onSubmit={this.handleSubmit}>
      <label className="label">
      Email:
      </label>
      <input className="inputField" type="text" name="email" onChange={this.handleChange} value={this.state.email}/> <br/>
      <label className="label">
      Password:
      </label>
      <input className="inputField" type="password" name="password" onChange={this.handleChange} value={this.state.password}/> <br/>
      <input className="fsSubmitButton" type="submit" value="Submit" />
      </form>)
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
