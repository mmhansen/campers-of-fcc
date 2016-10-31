import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getCount } from '../actions/story-actions'
import Nav from './Nav';
import Footer from './common/Footer'

class Main extends Component {

  componentWillMount() {
    this.props.getCount()
  }

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
        {/* <Footer /> */}
      </div>
    )
  }
}

export default connect(null, { getCount })(Main);
