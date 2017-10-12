export function loggedIn(){
  return{
    type: "LOGGED_IN"
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

export function createdAccount(){
  return {
    type: "FETCHED_ACCOUNT"
    //just to turn off fetching status
  }
}

export function login(user){
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
    }).then((res) => res.json())
    .then(userInfo => {
      localStorage.setItem('name', userInfo.name)
      localStorage.setItem('jwt', userInfo.jwt)
      dispatch(loggedIn())
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
