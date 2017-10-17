export default function lexiconReducer(state={list: [], fetchingLexicon: false}, action){
  switch(action.type) {
    case "FETCHING_LEXICON":
      return Object.assign({}, state, {
        fetchingLexicon: true
      })
    case "FETCHED_LEXICON":
      return Object.asssign({}, state, {
        fetchingLexicon: false,
        list: action.payload
      })
  }
}
