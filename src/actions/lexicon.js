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
    fetch('https://scite-backend.herokuapp.com/api/v1/lexicon/', {
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

export function updateLexicon(word, lexiconID){
  return function(dispatch){
    dispatch(fetchingLexicon())
    fetch(`https://scite-backend.herokuapp.com/api/v1/lexicon/${lexiconID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        word: word.word,
        definition: word.definition
      })
    }).then(res => res.json())
    .then((vocabList) => {
      dispatch(setLexicon(vocabList))
    })
  }
}

export function deleteLexicon(lexiconID){
  return function(dispatch){
    dispatch(fetchingLexicon())
    fetch(`https://scite-backend.herokuapp.com/api/v1/lexicon/${lexiconID}`, {
      method: 'DELETE',
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

export function addWord(word){
  return {
    type: 'ADD_WORD',
    payload: word
  }
}

export function addingWord(word, noteID){
  return function(dispatch){
    fetch('https://scite-backend.herokuapp.com/api/v1/lexicon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        'word': word.word,
        'definition': word.definition,
        'note_id': noteID
      })
    }).then(res => res.json())
    .then((lexicon) => {
      dispatch(addWord(lexicon))
    })
  }
}
