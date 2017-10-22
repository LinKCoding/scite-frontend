import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect } from 'react-router-dom'

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
    this.props.login({email, password})
    // this.setState({
    //   email: "",
    //   password: "",
    //   navigating: true
    // })
    //check route and redirect if log in went through, i.e. loggedIn === "true"
    // this.props.history.push("/notes")
  }
  //
  // componentWillUpdate(prevProps){
  //   if(this.props.loggedIn){
  //     this.setState({
  //       navigating: true
  //     })
  //   }
  // }

  render(){
    console.log(this.state.navigating, this.props, localStorage.getItem('jwt'));
    if(this.state.navigating){
      console.log("got jwt");
      return( <Redirect to="/" /> )
    } else if(this.props.fetchingAccount) {
      console.log('hitting fetching');

      <Redirect to="/" />
    } else {
      console.log("rendering form");
      return (
        <div>
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
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
