import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
/*
 * Authorization
 */
import RequireAdmin from './components/utils/RequireAdmin'
import RequireAuth from './components/utils/RequireAuth'
import LogoutPage from './components/utils/LogoutPage'
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
        // Sign In
        <Route path="login" component={ AuthPage } />
        // Sign Up
        <Route path="register" component={ AuthPage } />
        // Make Story
        <Route path="story" component={ RequireAuth(CreateOrEditPage) } />
        // My Stories
        <Route path="mystories" component={ RequireAuth(MyStoriesPage) } />
        // Admin Page
        <Route path="admin" component={ RequireAdmin(AdminPage) } />
        // Logout
        <Route path="logout" component={ LogoutPage } />
        // handle 404 routes
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  )
}

export default Routes;
