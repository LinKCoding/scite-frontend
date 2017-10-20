export default function lexiconReducer(state={list: [], fetchingLexicon: false}, action){
  switch(action.type) {
    case "FETCHING_LEXICON":
      return Object.assign({}, state, {
        fetchingLexicon: true
      })
    case "SET_LEXICON":
      return Object.assign({}, state, {
        fetchingLexicon: false,
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
