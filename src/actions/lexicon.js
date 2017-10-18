export function fetchingLexicon(){
  return {
    type: "FETCHING_LEXICON"
  }
}

export function setLexicon(list){
  return {
    type: "SET_LEXICON",
    payload: list
  }
}

export function fetchedLexicon(){
  return function(dispatch){
    dispatch(fetchingLexicon())
    fetch('http://localhost:3000/api/v1/lexicon/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(res => res.json())
    .then((vocabList) => {
      dispatch(setLexicon(vocabList))
    })
  }
}
