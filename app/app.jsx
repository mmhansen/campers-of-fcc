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
import Main from './containers/Main';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage'
import Home from './components/Home';
//
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)
render(
  // redux provder
  <Provider store={store}>
    // routes
    <Router history={ hashHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ Home } />
        <Route path="signup" component={ SignupPage } />
        <Route path="login" component={ LoginPage } />
      </Route>
    </Router>
  </Provider>,
  // this is where the react app goes
  document.getElementById("app")
)
