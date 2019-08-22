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
import authReducer from '../reducers/authReducer';
import LoginPage from '../components/LoginPage.jsx';
import PrivateRoute from '../components/privateRoute';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

const store = createStore(
  combineReducers({
    Auth: authReducer,
    Posts: postsReducer,
    Menu: menuReducer,
    Theme: themeReducer,
  }),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <Route path="/" exact component={LoginPage} />
        <PrivateRoute component={App} />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
