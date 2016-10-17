import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
  render () {
    return (
      <div>
        {/* Navbar */}
        <Nav/>
        {/* Content */}
        <div className="container-fluid">
          <div className="row content">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
