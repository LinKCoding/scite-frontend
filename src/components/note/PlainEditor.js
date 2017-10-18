import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import editorStyles from './editorStyles.css';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'


const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

class PlainEditor extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.currentNote.note.content)))
      }

      // const content = window.localStorage.getItem('content');
      // const content = this.props.currentNote.note.content
      // console.log(this.props);
      // if(this.props.currentNote.note) {
      //   console.log("content loaded");
      //   this.state.seditorState = EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.currentNote.note.content)));
      // } else {
      //   console.log("content not loaded");
      //   this.state.editorState = EditorState.createEmpty();
      // }
    }

  componentDidMount(){
    this.props.setNote(this.props.noteID)
    // this.setState({
    //   editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.currentNote.note.content)))
    // })
  }

  // componentWillUpdate(){
  //   if(this.props.currentNote.note) {
  //     const content = this.props.currentNote.note.content
  //     console.log("content loaded");
  //     console.log(this.props.currentNote.note.content)
  //     // debugger
  //     this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.currentNote.note.content)))
  //   } else {
  //     console.log("content not loaded");
  //     // this.state.editorState = EditorState.createEmpty();
  //   }
  // }

  saveContent = debounce((content) => {
    fetch(`http://localhost:3000/api/v1/notes/${this.props.noteID}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }),
      body: JSON.stringify({
        content: convertToRaw(content),
      })
    })
  }, 1000);

  onChange = (editorState) => {
      const contentState = editorState.getCurrentContent();
      // const checkState = convertToRaw(contentState)
      // debugger
      this.saveContent(contentState);
      this.setState({
        editorState,
      });
    }

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    setNote: (noteID) => {
      dispatch(setNote(noteID))
    }
  }
}

function mapStateToProps(state){
  return {
    currentNote: state.note.currentNote
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlainEditor)
