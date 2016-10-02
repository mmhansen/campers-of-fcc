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
              {/* sign in link */}
              <li>
                <Link to="/login" activeClassName="active">Login</Link>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Main;
