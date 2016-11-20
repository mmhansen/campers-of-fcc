/*
 * Redux
 */
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { AUTH_USER, SET_USER } from './actions/types'
import rootReducer from './reducers'
import cookie from 'react-cookie'

//const devtools = __DEVTOOLS__ === "dev"? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): {}
const devtools = true? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): {}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, devtools);

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  const user = cookie.load('user')
  store.dispatch({ type: AUTH_USER });
  store.dispatch({
    type: SET_USER,
    fullName: `${user.firstName} ${user.lastName}`,
    role: user.role
  })
}

/*
 * render to DOM
 */
import React from 'react';
import  { render } from 'react-dom';
import Routes from './routes';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
)
