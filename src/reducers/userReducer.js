export default function userReducer(state = { loggedIn: false, fetchingAccount: false, user_id:"" }, action) {
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
    // case "LOG_OUT":
    //   return Object.assign({}, state, {
    //     loggedIn: false,
    //     user_id: "",
    //     article: {
    //       articles: [],
    //       fetching_articles: false
    //     },
    //     note: {
    //       notes:[],
    //       currentNote: {},
    //       fetchingNotes: false
    //     }
    //    })
    default:
      return state
  }
}
