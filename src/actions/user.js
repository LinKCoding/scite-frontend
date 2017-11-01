export function loggedIn(user_first_name){
  return {
    type: "LOGGED_IN",
    payload: user_first_name
  }
}

export function loginError(error){
  return {
    type: "LOGIN_ERROR"
  }
}

export function signUpError(error){
  return {
    type: "SIGNUP_ERROR"

  }
}

export function setUser(user){
  //this will also be a fetch and grab info via user id
  return {
    type: "SET_USER",
    payload: user
  }
}

export function fetchingAccount(){
  return {
    type: "FETCHING_ACCOUNT"
  }
}

export function fetchedAccount(){
  return {
    type: "FETCHED_ACCOUNT"
  }
}

export function logOut(){
  return {
    type: "LOG_OUT"
  }
}

export function createdAccount(){
  return {
    type: "FETCHED_ACCOUNT"
    //just to turn off fetching status
  }
}

export function login(user){
  console.log(user)
  return function(dispatch){
    dispatch(fetchingAccount())
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Incorrect username or password')
      }
      return res
    })
    .then((res) => res.json())
    .then(userInfo => {

      localStorage.setItem('jwt', userInfo.jwt)
      localStorage.setItem('name', userInfo.user_first_name)
      dispatch(loggedIn(userInfo.user_first_name))
    })
    .then(() => {
      user.history.push("/")
    })
    .catch(err => {
      dispatch(loginError(err))
    })
  }
}


export function signUp(user){
  console.log(user);
  return function(dispatch){
    dispatch(fetchingAccount())
    fetch("http://localhost:3000/api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: user.firstName,
          last_name: user.lastName,
          password: user.password,
          email: user.email
        })
      })
    .then(res => {
      if(!res.ok) {
        throw new Error('Cannot create account, email is already taken')
      }
      return res
    })
    .then((res) => res.json())
    .then((userInfo) => {
      localStorage.setItem('jwt', userInfo.jwt)
      localStorage.setItem('name', userInfo.user_first_name)
      dispatch(loggedIn(userInfo.user_id))
    })
    .then(() => {
      console.log(user.history);
      user.history.push("/")
    })
    .catch(err => {
      console.log(err);
      dispatch(signUpError(err))
    })
  }
}
