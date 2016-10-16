import React from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {

  renderLinks() {

    let links = []

    let guestLinks = [
      <li key={2}><Link to="/au/login">Login</Link></li>,
      <li key={1}><Link to="/au/register">Register</Link></li>
    ]

    if (this.props.authenticated) {
      links.push(<li key={1 + 'header'}><Link to="/story">Create</Link></li>)
      if (this.props.role === 'Admin') {
        links.push(<li key={2 + 'header'}><Link to="/admin">Admin</Link></li>)
      }
      links.push(<li key={3 + 'header'}><Link to="/logout">Logout</Link></li>)
    } else {
      links = links.concat(guestLinks)
    }

    return links
  }

  render (){

   // rendering
    return (
      <nav className="navbar navbar-default ">
        <div className="container-fluid">
          {/* Title and Image */}
          <div className="navbar-header">
            <IndexLink
             to="/"
             className="navbar-brand"
             activeClassName="active">
             <h2>Campfire Stories</h2>
             </IndexLink>
          </div>
          {/* Links */}
          <div>
            <ul className="nav navbar-nav navbar-right">
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
