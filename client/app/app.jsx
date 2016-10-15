// dependencies
import React from 'react';
import  { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
// redux
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// including styling
require('./stylesheets/style.scss');
// components
import Routes from './routes';
//
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// render to DOM
render(
  // redux provder
  <Provider store={store}>
    <Routes />
  </Provider>,
  // this is where the react app goes
  document.getElementById("app")
)
