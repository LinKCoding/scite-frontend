import React from 'react'


class CreateNewNote extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }

  render(){
    console.log(this.props.article_id);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Create a new note"/>
        </form>
      </div>
    )
  }
}

export default CreateNewNote
