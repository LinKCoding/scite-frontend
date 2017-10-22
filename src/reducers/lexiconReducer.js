export default function lexiconReducer(state={list: [], fetchingLexicon: false, fetchedLexicon: false}, action){
  switch(action.type) {
    case "FETCHING_LEXICON":
      return Object.assign({}, state, {
        fetchingLexicon: true
      })
    case "SET_LEXICON":
      return Object.assign({}, state, {
        fetchingLexicon: false,
        fetchedLexicon: true,
        list: action.payload
      })
    case "ADD_WORD":
      return Object.assign({}, state, {
        list: [...state.list, action.payload]
      })
    default:
      return state
  }
}
