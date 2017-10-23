export default function userReducer(state = { loggedIn: false, fetchingAccount: false, user_id:"", errors: []}, action) {
  switch(action.type) {
    case "SET_USER":
      return Object.assign({}, state, {
        user_id: action.payload
      })
    case "SIGNUP":
      return Object.assign({}, state, {
        fetchingAccount: false
      })
    case "FETCHING_ACCOUNT":
      return Object.assign({}, state, { fetchingAccount: true })
    case "FETCHED_ACCOUNT":
      return Object.assign({}, state, { fetchingAccount: false })
      // might not need ^ anymore
    case "LOGGED_IN":
      return Object.assign({}, state, {
        fetchingAccount: false,
        loggedIn: true,
        user_id: action.payload
      })
    case "USER_ERROR":
      return Object.assign({}, state, {
        errors: [...state.errors, action.payload]
      })
    default:
      return state
  }
}
