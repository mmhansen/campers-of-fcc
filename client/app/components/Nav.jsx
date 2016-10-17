import React from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {

  renderLinks() {
    /*
    <p class="navbar-text">Signed in as Mark Otto</p>
    */

    let links = []

    let guestLinks = [
      <li key={2} role="presentation">
        <Link
          activeClassName="active"
          to="/au/login">
          Login
        </Link>
      </li>,
      <li key={1} role="presentation">
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
          role="presentation"
          key={1 + 'header'}>
          <Link
            activeClassName="active"
            to="/story">
            Create
          </Link>
        </li>)
      if (this.props.role === 'Admin') {
        links.push(
          <li
            role="presentation"
            key={2 + 'header'}>
            <Link
              activeClassName="active"
              to="/admin">
              Admin
            </Link>
          </li>)
      }
      links.push(
        <li
          role="presentation"
          key={3 + 'header'}>
          <Link
            activeClassName="active"
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
      <nav
        id="navbar"
        className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">

          {/* Title and Image */}
          <div className="navbar-header">
             {/* Title Icon */}
            <h2>Campfire Stories</h2>
          </div>
          {/* Links */}
          {/* handle navbar collapse on smaller devices */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li key='homie'>
                <IndexLink
                  to="/"
                  activeClassName="active">
                  Home
                </IndexLink>
              </li>
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
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
