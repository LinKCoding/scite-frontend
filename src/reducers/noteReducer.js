export default function noteReducer(state={ notes: [], currentNote: {}, fetchingNotes: false, fetchedNotes: false}, action){
  switch(action.type){
    case "CREATE_NOTE":
      return Object.assign({}, state, {
        currentNote: action.payload
      })
    case "FETCHING_NOTES":
      return Object.assign({}, state, { fetchingNotes: true})
    case "FETCHED_NOTES":
      return Object.assign({}, state, {
        fetchingNotes: false,
        fetchedNotes: true,
        notes: action.payload,
        // currentNote: {}
      })
    case "SETTING_NOTE":
      return Object.assign({}, state, {
        fetchingNotes: false,
        currentNote: action.payload
      })
    default:
      return state
  }

}
