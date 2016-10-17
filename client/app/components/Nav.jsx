import React from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {

  renderLinks() {

    let links = []

    let guestLinks = [
      <li key={2}>
        <Link
          activeClassName="active"
          to="/au/login">
          Login
        </Link>
      </li>,
      <li key={1}>
        <Link
          activeClassName="active"
          to="/au/register">
          Register
        </Link>
      </li>
    ]

    if (this.props.authenticated) {
      links.push(
        <li
          key={1 + 'header'}>
          <Link
            to="/story">
            Create
          </Link>
        </li>)
      if (this.props.role === 'Admin') {
        links.push(
          <li
            key={2 + 'header'}>
            <Link
              to="/admin">
              Admin
            </Link>
          </li>)
      }
      links.push(
        <li
          key={3 + 'header'}>
          <Link
            to="/logout">
            Logout
          </Link>
        </li>)
    } else {
      links = links.concat(guestLinks)
    }

    return links
  }

  render (){
   // rendering
    return (
      <div className="col-sm-12" id="navbar">
            {/* Links */}
              <ul className="nav nav-pills">
                {this.renderLinks()}
              </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    role: state.user.role
  }
}

export default connect(mapStateToProps)(Main);


/*

  <IndexLink
    to="/"
    className="navbar-brand"
    activeClassName="active">
  </IndexLink>
*/
