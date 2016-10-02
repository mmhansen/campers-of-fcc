var React = require('react');
var Nav = require('../components/Nav');

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
