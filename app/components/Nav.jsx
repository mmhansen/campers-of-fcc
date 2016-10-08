import React from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {
  render (){
    // we will pass the authentiation prop to navbar
    // for now I will just pass nav auth=false in main.jsx;
    const { isAuthenticated } = this.props.auth;
    // this is a Component for being logged in
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
         <li><a href="#" onClick="Logout">Logout</a></li>
      </ul>
    );
   // this is a Component for NOT being logged in
    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/story">Create</Link></li>
      </ul>
   );
   // rendering
    return (
      <nav className="navbar navbar-default">
        {/* title */}
          <div className="navbar-header">
             <IndexLink
              to="/"
              className="navbar-brand"
              activeClassName="active">
              <h2>Campfire Stories</h2>
              </IndexLink>
           </div>
          {/* SignUp or Login link */}
           <div className="collapse navbar-collapse">
             { isAuthenticated ? userLinks : guestLinks }
           </div>
      </nav>
    )
  }
}

export default Main;
