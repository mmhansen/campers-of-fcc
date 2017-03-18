import React from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';

/*
 * Navbar Component
 */
const NavbarLinks = ({ role, authenticated }) => {
  /*
   * Define Links for User, Guest, or Admin
   */
  let links = [];
  /*
   * Guest Links
   */
  links.push(
    <li key={7} role="presentation">
      <Link activeClassName="active" to="/about">About Us</Link>
    </li>)
    
  if ( role === 'Guest' ) {
    links.push(
      <li key={1} role="presentation">
        <Link activeClassName="active" to="/login">Login</Link>
      </li>)
    links.push(
      <li key={2} role="presentation" id="register">
        <Link activeClassName="active" to="/register">Register</Link>
      </li>)
  }
  /*
   * User Links
   */
   if ( role === 'Admin' || role === 'Member') {
     links.push(
       <li role="presentation" key={3}>
         <Link activeClassName="active" to="/story">Create</Link>
       </li>)
     links.push(
       <li role="presentation" key={4}>
         <Link activeClassName="active" to="/mystories">My Stories</Link>
       </li>)
     links.push(
       <li role="presentation" key={5}>
         <Link activeClassName="active" to="/logout">Logout</Link>
       </li>)
    }
    /*
    * Admin Links
    */
     if ( role === 'Admin' ) {
       links.push(
         <li role="presentation" key={6}>
           <Link activeClassName="active" to="/admin">Admin</Link>
         </li>)
      }

  return (
    <div id="navbar" className="collapse navbar-collapse navbar-responsive-collapse">
        <ul className="nav navbar-nav navbar-right">
            { links }
        </ul>
    </div>
  )
}
/*
 * Redux state
 */
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    role: state.user.role
  }
}

export default connect(mapStateToProps, null)(NavbarLinks);
