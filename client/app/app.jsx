// dependencies
import React from 'react';
import  { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import cookie from 'react-cookie'
// redux
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { AUTH_USER, SET_USER } from './actions/types'
// including styling
require('./stylesheets/style.scss');
// components
import Routes from './routes';
//
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
  store.dispatch({
    type: SET_USER,
    fullName: `${cookie.load('user').firstName} ${cookie.load('user').lastName}`,
    role: cookie.load('user').role
  })
}

// render to DOM
render(
  // redux provder
  <Provider store={store}>
    <Routes />
  </Provider>,
  // this is where the react app goes
  document.getElementById("app")
)
