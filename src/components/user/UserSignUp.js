import React from 'react';
import { signUp } from '../../actions/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Button, Form, Segment, Message } from 'semantic-ui-react'

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
      const { firstName,lastName, email, password } = this.state
      const allInfo = { firstName, lastName, email, password, history: this.props.history}
      this.props.signUp(allInfo)
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
      <Segment inverted clearing color='teal'>
        <Form inverted onSubmit={this.handleSubmit} >
          <Form.Input label='First Name:' placeholder='First Name' name="firstName" onChange={this.handleChange} value={this.state.firstName} required/>

          <Form.Input label='Last Name:' placeholder='Last Name' name="lastName" onChange={this.handleChange} value={this.state.lastName} required/>

          <Form.Input label='E-mail:' placeholder='E-mail' name="email" onChange={this.handleChange} value={this.state.email} required/>

          <Form.Input type="password" label='Password:' placeholder='Password' name="password" onChange={this.handleChange} value={this.state.password} required/>

          <Form.Input type="password" label='Confirm Password:' placeholder='Confirm Password' name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} required/>
          <Button position="right" color="blue" type="submit" className="ui right floated"> Sign up </Button>
        </Form>
      </Segment>
    )
  }

  render(){
    console.log(this.props);
    if(!this.props.error){
      return(
        <Container textAlign='left'>
          {this.signUpForm()}
        </Container>
      )
    } else {

      return(
        <Container textAlign='left'>
          {this.signUpForm()}
          <Message error
             header='Error'
             content='This email is already taken.'
           />
       </Container>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSignUp))
