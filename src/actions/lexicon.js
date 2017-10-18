export function addWord(word){
  type: 'ADD_WORD'
  payload: word
}

export function addingWord(word){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        'article_id': article.id
      })
    }).then(res => res.json())
    .then((note) => {
      dispatch(addWord(word))
    })
  }
}
