export function fetchingArticles(){
  return {
    type: "FETCHING_ARTICLES"
  }
}

export function fetchedArticles(articles){
  return{
    type:"FETCHED_ARTICLES",
    payload: articles
  }
}

export function settingArticle(article){
  return {
    type: "SET_ARTICLE",
    payload: article
  }
}

export function fetchArticles(){
  return function(dispatch) {
    dispatch(fetchingArticles())
    fetch("http://localhost:3000/api/v1/articles", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((articles) => {
        dispatch(fetchedArticles(articles))
      })
    }
  }

export function setArticle(noteID){
  return function(dispatch){
    dispatch(fetchingArticles())
    fetch(`http://localhost:3000/api/v1/note/${noteID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((articles) => {
        dispatch(settingArticle(articles))
      })
  }
}
