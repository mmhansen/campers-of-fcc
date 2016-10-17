import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
  render () {
    return (
      <div className="container-fluid">
        {/* Navbar Row */}
        <div className="row">
          <Nav/>
        </div>
        {/* Content Row */}
        <div className="row content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Main;
