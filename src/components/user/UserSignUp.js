import React from 'react';
import { signUp } from '../../actions/user'
import { connect } from 'react-redux'

class UserSignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  changeFirstName = (event) => {
    this.setState({firstName: event.target.value})
  }
  changeLastName = (event) => {
    this.setState({lastName: event.target.value})
  }
  changeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  changePassword = (event) => {
    this.setState({password: event.target.value})
  }
  changeConfirmationPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  }

  checkPasswords = () => {
    return (this.state.password === this.state.confirmPassword)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.checkPasswords()){
      this.props.signUp(this.state)
    } else {
      alert("your passwords don't match")
      this.setState({
        password: "",
        confirmPassword: ""
      })
    }
  }


  render(){
    console.log(this.props);
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
        <label className="label">
          First Name:
        </label>
          <input type="text" name="firstName" onChange={this.changeFirstName} value={this.state.firstName}/> <br/>
        <label className="label">
          Last Name:
        </label>
          <input type="text" name="lastName" onChange={this.changeLastName} value={this.state.lastName}/> <br/>
        <label className="label">
          Email:
        </label>
          <input type="text" name="email" onChange={this.changeEmail} value={this.state.email}/> <br/>
        <label className="label">
          Password:
        </label>
          <input type="password" name="password" onChange={this.changePassword} value={this.state.password}/> <br/>
        <label className="label">
          Confirm Password:
        </label>
          <input type="password" name="passwordConfirmation" onChange={this.changeConfirmationPassword} value={this.state.confirmPassword}/> <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (user) => {
      dispatch(signUp(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserSignUp)
