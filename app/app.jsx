// dependencies
import React from 'react';
import  { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
// including styling
require('./stylesheets/style.scss');
// components
import Main from './containers/Main';
import Login from './components/Login';
import Home from './components/Home';
//
render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } />
      <Route path="login" component={ Login } />
    </Route>
  </Router>,
  // this is where the react app goes
  document.getElementById("app")
)
