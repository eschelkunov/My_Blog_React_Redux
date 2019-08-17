import '../stylesheets/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import menuReducer from '../reducers/menuReducer';
import { postsReducer } from '../reducers/postsReducer';
import themeReducer from '../reducers/themeReducer';

const store = createStore(
  combineReducers({
    Posts: postsReducer,
    Menu: menuReducer,
    Theme: themeReducer
  }),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
