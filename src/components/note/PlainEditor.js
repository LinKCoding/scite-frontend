import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import editorStyles from './editorStyles.css';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux'
import { setNote } from '../../actions/note'
import { Segment } from 'semantic-ui-react'

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => // eslint-disable-next-line
          <Button key={i} {...this.props} />
        )}
      </div>
    );
  }
}

class HeadlinesButton extends Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className={editorStyles.headlineButtonWrapper}>
        <button onClick={this.onClick} className={editorStyles.headlineButton}>
          H
        </button>
      </div>
    );
  }
}

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    // CodeButton,
    Separator,
    // HeadlinesButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    // CodeBlockButton
  ]
});


// const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

class PlainEditor extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.noteContent)))
      }
    }


  saveContent = debounce((content) => {
    fetch(`http://localhost:3000/api/v1/notes/${this.props.correctNote.id}`, {
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
      <Segment className="editor" onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </Segment>
    );
  }
}


export default PlainEditor
