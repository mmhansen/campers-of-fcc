// dependencies
import React from 'react';
import  { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// including styling
require('./stylesheets/style.scss');
// components
import Routes from './Routes';
//
const store = createStore(
  (state = {}) => state
)
// render to DOM
render(
  // redux provder
  <Provider store={store}>
    <Routes />
  </Provider>,
  // this is where the react app goes
  document.getElementById("app")
)
