import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
/*
 * Authentication
 */
import SignupForm from './components/Auth/Signup/SignupForm'
import LoginForm from './components/Auth/Login/LoginForm'
/*
 * Authorization
 */
import RequireAdmin from './components/Admin/RequireAdmin'
import RequireAuth from './components/Auth/RequireAuth'
import LogoutPage from './components/Auth/LogoutPage'
/*
 * Views
 */
import NotFoundPage from './Pages/NotFoundPage'
import AdminPage from './Pages/AdminPage'
import CreateOrEditPage from './Pages/CreateOrEditPage'
import HomePage from './Pages/HomePage'
import MyStoriesPage from './Pages/MyStoriesPage'
import AuthPage from './Pages/AuthPage'
//
import Container from './Container'
/*
 * Routes
 */
const Routes = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Container }>
        // Home Page
        <IndexRoute component={ HomePage } />
        // Authentication
        <Route path="au" component={ AuthPage }>
          <Route path="login" component= { LoginForm } />
          <Route path="register" component= { SignupForm } />
        </Route>
        // Make Story
        <Route path="story" component={ RequireAuth(CreateOrEditPage) } />
        // My Stories
        <Route path="mystories" component={ RequireAuth(MyStoriesPage) } />
        // Admin Page
        <Route path="admin" component={ RequireAdmin(AdminPage) } />
        // Logout
        <Route path="logout" component={ RequireAuth(LogoutPage) } />
        // handle 404 routes
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  )
}

export default Routes;
