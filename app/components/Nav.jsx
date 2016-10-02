var React = require('react');
var {Link, IndexLink} = require('react-router');

var Main = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-pills">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/login" activeClassName="active">Login</Link></li>
      </ul>
    )
  }
});

module.exports = Main;
