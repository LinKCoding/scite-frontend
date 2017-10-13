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
  return {
    
  }
}
