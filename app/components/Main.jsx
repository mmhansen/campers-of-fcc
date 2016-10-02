var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <Nav/>
          { this.props.children }
        </div>
      </div>

      </div>
    )
  }
});

module.exports = Main;
