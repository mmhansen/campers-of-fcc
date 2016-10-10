// dependencies
import React from 'react';
import  { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
// including styling
require('./stylesheets/style.scss');
// components
import Main from './containers/Main';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage'
import StoryPage from './components/Story/StoryPage'
import Home from './components/Home';
//

class Routes extends React.Component{
  render(){
    return(
      // routes
      <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ Home } />
          <Route path="signup" component={ SignupPage } />
          <Route path="login" component={ LoginPage } />
          <Route path="story" component={ StoryPage } />

          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
