import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// BUT FOR NOW, USE ONE ROOTREDUCER
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'

import registerServiceWorker from './registerServiceWorker';
// import thunk from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
