import '../stylesheets/reset.css';
import './scripts';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import menuReducer from '../reducers/menuReducer';
import { postsReducer } from '../reducers/postsReducer';

const store = createStore(
  combineReducers({
    Posts: postsReducer,
    Menu: menuReducer,
  }),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
