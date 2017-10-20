export function fetchingNotes(){
  return {
    type: "FETCHING_NOTES"
  }
}

export function fetchedNotes(notes){
  return {
    type: "FETCHED_NOTES",
    payload: notes
  }
}

export function fetchNotes(){
  return function(dispatch){
    dispatch(fetchingNotes())
    fetch("http://localhost:3000/api/v1//usernotes", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then((res) => res.json())
    .then((notes) => {
      dispatch(fetchedNotes(notes))
    })
  }
}

export function settingNote(note){
  return {
    type: "SETTING_NOTE",
    payload: note
  }
}

export function setNote(noteID){
  return function(dispatch){
    dispatch(fetchingNotes())
    fetch(`http://localhost:3000/api/v1/notes/${noteID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then((res) => res.json())
      .then((entireNote) => {
        let newContent = entireNote.note.content
        newContent = newContent.replace(/=>/g, ":")
        entireNote = {...entireNote, note: {...entireNote.note, content: newContent}}

        dispatch(settingNote(entireNote))
      })
  }
}

export function createNote(article){
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
      dispatch(settingNote(note))
    })
  }
}
