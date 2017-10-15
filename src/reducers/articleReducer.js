export default function articleReducer(state = { articles:[], fetching_articles: false, currentArticle: {}}, action) {
  switch(action.type) {
    case "FETCHING_ARTICLES":
      return Object.assign({}, state, {
        fetching_articles: true
      })
    case "FETCHED_ARTICLES":
      return Object.assign({}, state, {
        fetching_articles: false,
        articles: action.payload
      })
    case "SET_ARTICLE":
      return Object.assign({}, state, {
        fetching_articles: false,
        currentArticle: action.payload
      })
    default:
      return state
  }
}
