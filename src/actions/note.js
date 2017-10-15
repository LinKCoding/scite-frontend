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
      .then((note) => {
        dispatch(settingNote(note))
      })
  }
}
