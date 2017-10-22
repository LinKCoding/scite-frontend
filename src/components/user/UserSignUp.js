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


  render(){
    console.log(this.props);
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
        <label className="label">
          First Name:
        </label>
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/> <br/>
        <label className="label">
          Last Name:
        </label>
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/> <br/>
        <label className="label">
          Email:
        </label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/> <br/>
        <label className="label">
          Password:
        </label>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/> <br/>
        <label className="label">
          Confirm Password:
        </label>
          <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation}/> <br/>
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
