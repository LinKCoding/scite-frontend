export function addWord(word){
  type: 'ADD_WORD'
  payload: word
}

export function addingWord(word, noteID){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/lexicon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        word
      })
    }).then(res => res.json())
    .then((note) => {
      dispatch(addWord(word))
    })
  }
}
