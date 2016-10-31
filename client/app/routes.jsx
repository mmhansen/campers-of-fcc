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
import NotFoundPage from './components/Pages/NotFoundPage'
import Home from './components/Home/Content'
import AdminPage from './components/Admin/AdminPage'
import RequireAdmin from './components/Admin/RequireAdmin'
import AuthNav from './components/Auth/AuthNav'
import FullStory from './components/Admin/FullStory'
import MainAdmin from './components/Admin/Main'
// stories
import MakeStory from './components/Story/MakeStory'
import EditStory from './components/Story/EditStory'
import MyStories from './components/Story/MyStories'

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

          <Route path="story" component={ RequireAuth(MakeStory) } />
          <Route path="edit" component={ RequireAuth(EditStory)} />
          <Route path="mystories" component={ RequireAuth(MyStories)} />
          <Route path="logout" component={ RequireAuth(LogoutPage ) } />
          <Route path="admin" component={MainAdmin}>
            <IndexRoute component={ RequireAdmin(AdminPage) }></IndexRoute>
            <Route path="review/:story_id" component={FullStory} />
          </Route>

          // handle 404 routes
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
