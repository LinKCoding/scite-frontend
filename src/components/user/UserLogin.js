import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect, withRouter } from 'react-router-dom'
import { Container, Button, Form, Segment, Message } from 'semantic-ui-react'
import './Login.css'

class UserLogin extends React.Component {
  state = {
    email: "",
    password: "",
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
      <Segment inverted clearing color='teal'>
        <Form inverted onSubmit={this.handleSubmit} >
          <Form.Input label='E-mail:' placeholder='E-mail' name="email" onChange={this.handleChange} value={this.state.email} required/>

          <Form.Input type="password" label='Password:' placeholder='Password' name="password" onChange={this.handleChange} value={this.state.password} required/>

          <Button color="blue" type="submit" className="ui right floated"> Login </Button>
        </Form>
      </Segment>
    )
  }


  render(){
      if(!this.props.error){
        return (
          <Container textAlign='left' className="login">
            {this.loginForm()}

          </Container>
        )
      } else {
        return (
          <Container textAlign='left' className="login">
            {this.loginForm()}
            <Message error
               header='Error'
               content='Incorrect E-mail or password.'
             />
         </Container>
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
    error: state.user.loginError
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin))
