import React from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {
  render (){

    // const { isAuthenticated } = this.props.auth;
    //
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/story">Create</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    );
   //
  const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
   );
   //
   const adminLinks = (
     <ul className="nav navbar-nav navbar-right">
       <li><Link to="/story">Create</Link></li>
       <li><Link to="/admin">Admin</Link></li>
       <li><Link to="/">Logout</Link></li>
     </ul>
   );
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
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/story">Create</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Main;
