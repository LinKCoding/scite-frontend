import React from 'react';
import { signUp } from '../../actions/user'
import { connect } from 'react-redux'

class UserSignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkPasswords = () => {
    return (this.state.password === this.state.passwordConfirmation)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.checkPasswords()){
      this.props.signUp(this.state)
    } else {
      alert("your passwords don't match")
      this.setState({
        password: "",
        passwordConfirmation: ""
      })
    }
  }

  signUpForm = () => {
    return(
      <form onSubmit={this.handleSubmit} >
      <label className="label">
        First Name:
      </label>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} required/> <br/>
      <label className="label">
        Last Name:
      </label>
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} required/> <br/>
      <label className="label">
        Email:
      </label>
        <input type="text" name="email" onChange={this.handleChange} value={this.state.email} required/> <br/>
      <label className="label">
        Password:
      </label>
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required/> <br/>
      <label className="label">
        Confirm Password:
      </label>
        <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} required/> <br/>
        <input type="submit" value="Submit" />
      </form>

    )
  }

  render(){
    if(!this.props.error){
      return(
        <div>
          {this.signUpForm()}
        </div>
      )
    } else {

      return(
        <div>
          {this.signUpForm()}
          <div>Sorry, email is already claimed</div>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (user) => {
      dispatch(signUp(user))
    }
  }
}

function mapStateToProps(state){
  return {
    error: state.user.signUpError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
