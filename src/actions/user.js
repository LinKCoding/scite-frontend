export function login(user){
  return {
    type: "LOGIN",
    payload: user
  }
}

export function signup(user){
  return {
    type: "SIGNUP",
    payload: user
  }
}
