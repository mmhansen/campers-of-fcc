import React from 'react';
import  { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
require('./stylesheets/style.css');
var Main = require('Main');
var Home = require('Home');
var Login = require('Login');


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
    </Route>
  </Router>,
  document.getElementById("app")
)
