import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'
import articleReducer from './reducers/articleReducer'
import noteReducer from './reducers/noteReducer'
import lexiconReducer from './reducers/lexiconReducer'

import registerServiceWorker from './registerServiceWorker';

const appReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  note: noteReducer,
  lexicon: lexiconReducer
})

const rootReducer = (state, action) => {
  if(action.type === 'LOG_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
