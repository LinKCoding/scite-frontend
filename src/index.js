import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// BUT FOR NOW, USE ONE ROOTREDUCER
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'
import articleReducer from './reducers/articleReducer'
import noteReducer from './reducers/noteReducer'

import registerServiceWorker from './registerServiceWorker';

const rootReducers = combineReducers({
  user: userReducer,
  article: articleReducer,
  note: noteReducer
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
