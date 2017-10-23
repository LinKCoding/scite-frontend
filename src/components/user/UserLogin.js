import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect, withRouter } from 'react-router-dom'

class UserLogin extends React.Component {
  state = {
    email: "",
    password: "",
    navigating: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const user = {email, password, history: this.props.history};
    this.props.login(user)
  }

  loginForm = () => {
    return(
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


  render(){
      if(this.props.errors.length === 0){
        return (
          <div>
            {this.loginForm()}
          </div>
        )
      } else {
        console.log("hitting this");
        console.log(this.props);
        console.log(this.props.errors[0])
        return (
          <div>
            {this.loginForm()}
            <div>Incorrect Username or password</div>
          </div>
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

function mapStateToProps(state){
  return {
    fetchingAccount: state.user.fetchingAccount,
    loggedIn: state.user.loggedIn,
    errors: state.user.errors
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin))
