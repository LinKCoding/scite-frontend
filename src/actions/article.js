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
    fetch("https://scite-backend.herokuapp.com/api/v1/", {
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

  export function fetchArticlesAndSetLatest(){
    return function(dispatch) {
      dispatch(fetchingArticles())
      fetch("https://scite-backend.herokuapp.com/api/v1/articles", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((articles) => {
          const latestArticle = articles[articles.length-1]
          dispatch(fetchedArticles(articles))
          dispatch(settingArticle(latestArticle))
        })
      }
    }

export function setArticle(noteID){
  return function(dispatch){
    dispatch(fetchingArticles())
    fetch(`https://scite-backend.herokuapp.com/api/v1/note/${noteID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((article) => {
        dispatch(settingArticle(article))
      })
  }
}
