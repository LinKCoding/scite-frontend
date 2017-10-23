export function loggedIn(user_id){
  return {
    type: "LOGGED_IN",
    payload: user_id
  }
}

export function loginError(error){
  return{
    type: "USER_ERROR",
    payload: error
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
      dispatch(loggedIn(userInfo.user_id))
    })
    .then(() => {
      user.history.push("/")
    })
    .catch(err => {
      console.log("hitting err")
      console.log(err);
      dispatch(loginError(err))
    })
  }
}


export function signUp(user){
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
    .then((res) => res.json())
    .then((userInfo) => {
      dispatch(createdAccount())
      alert("Account created, now log in! :)")
    })
  }
}
