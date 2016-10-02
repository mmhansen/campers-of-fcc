import React from 'react';
import Nav from '../components/Nav';

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Nav/>
          { this.props.children }
        </div>
      </div>

      </div>
    )
  }
});

module.exports = Main;
