// dependencies
import React from 'react'
import  { render } from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
// including styling
require('./stylesheets/style.scss')
// components
import Main from './components/Main'
import SignupForm from './components/Auth/Signup/SignupForm'
import LoginForm from './components/Auth/Login/LoginForm'
import LogoutPage from './components/Auth/LogoutPage'
import RequireAuth from './components/Auth/RequireAuth'
import StoryPage from './components/Story/StoryPage'
import NotFoundPage from './components/Pages/NotFoundPage'
import Home from './components/Home/LandingPage'
import AdminPage from './components/Admin/AdminPage'
import RequireAdmin from './components/Admin/RequireAdmin'
import AuthNav from './components/Auth/AuthNav'
//

class Routes extends React.Component{
  render(){
    return(
      // routes
      <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ Home } />
          <Route path="au" component={ AuthNav }>
            <Route path="login" component= { LoginForm } />
            <Route path="register" component= { SignupForm } />
          </Route>
          <Route path="story" component={ RequireAuth(StoryPage) } />
          <Route path="logout" component={ RequireAuth(LogoutPage ) } />
          <Route path="admin" component={ RequireAdmin(AdminPage) } />
          // handle 404 routes
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
