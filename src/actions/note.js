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
    fetch("https://scite-backend.herokuapp.com/api/v1/usernotes", {
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
  // debugger
  return function(dispatch){
    dispatch(fetchingNotes())
    fetch(`https://scite-backend.herokuapp.com/api/v1/notes/${noteID}`, {
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

export function createNote(allInfo, history){
  return function(dispatch){
    fetch('https://scite-backend.herokuapp.com/api/v1/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        'article_id': allInfo.id
      })
    })
    .then(res => res.json())
    .then((note) => {
      console.log(history);
      console.log(note);
      dispatch(settingNote(note))
      history.push(`/notes/${note.note.id}`)
    })
  }
}

export function deleteNote(noteID){
  return function(dispatch){
    fetch(`https://scite-backend.herokuapp.com/api/v1/notes/${noteID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(res => res.json())
    .then((notes) => {
      dispatch(fetchedNotes(notes))
    })
  }
}
