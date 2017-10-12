export default function userReducer(state = { user: {} }, action) {
  switch(action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        user: action.payload
      })
    case "SIGNUP":
      return Object.assign({}, state, {
        user: action.payload
      })
    default:
      return state
  }
}
