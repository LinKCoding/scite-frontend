export default function userReducer(state = { user: {}, loggedIn: false, fetchingAccount: false, jwt: "" }, action) {
  switch(action.type) {
    case "SET_USER":
      return Object.assign({}, state, {
        user: action.payload,
        fetchingAccount: false
      })
    case "LOGIN":
      return Object.assign({}, state, {
        user: action.payload.name,
        jwt: action.payload.jwt,
        fetchingAccount: false
      })
    case "SIGNUP":
      return Object.assign({}, state, {
        user: action.payload,
        fetchingAccount: false
      })
    case "FETCHING_ACCOUNT":
      return Object.assign({}, state, { fetchingAccount: true })
    case "FETCHED_ACCOUNT":
      return Object.assign({}, state, { fetchingAccount: false })
    case "LOGGED_IN":
      return Object.assign({}, state, { loggedIn: true})
    default:
      return state
  }
}
