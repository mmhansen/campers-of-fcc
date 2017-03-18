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
import CreatePage from './Pages/CreatePage'
import EditPage from './Pages/EditPage'
import HomePage from './Pages/HomePage'
import MyStoriesPage from './Pages/MyStoriesPage'
import AuthPage from './Pages/AuthPage'
import FullStoryPage from './Pages/FullStoryPage'
import AboutUs from './Pages/AboutUs'
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
        // Full Story
        <Route path="full/:story_id" component= { FullStoryPage } />
        // Make Story
        <Route path="story" component={ RequireAuth(CreatePage) } />
        // Edit Story
        <Route path="edit/:story_id" component={ RequireAuth(EditPage) } />
        // My Stories
        <Route path="mystories" component={ RequireAuth(MyStoriesPage) } />
        // About Us
        <Route path="about" component={AboutUs} />
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
