import React from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {
  render (){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* title */}
          <div className="navbar-header">
            <IndexLink to="/" activeClassName="active"><h2>Campfire Stories</h2></IndexLink>
          </div>
            <ul className="nav navbar-nav navbar-right">
              {/* Sign up link */}
              <li>
                <Link to="/signup" activeClassName="active">Sign Up</Link>
              </li>
              {/* Log in link */}
              <li>
                <Link to="/login" activeClassName="active">Log In</Link>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Main;
