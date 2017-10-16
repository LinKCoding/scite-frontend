import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { convertToRaw, convertFromRaw } from 'draft-js'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import editorStyles from './editorStyles.css';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

export default class TextEditor extends Component {

  // state = {
  //   editorState: createEditorStateWithText(text),
  // };
  constructor(props) {
  super(props);
  this.state = { };

  const content = window.localStorage.getItem('content');

  if (content) {
    this.state = { editorState:  createEditorStateWithText(convertFromRaw(JSON.parse(content))) }
  } else {
    this.state = { editorState:  createEditorStateWithText(text) }
  }
}

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState)
    console.log('content state', raw);
    console.log('show me the money', convertFromRaw(raw));
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  saveContent = (content) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

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
