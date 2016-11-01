import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import Hero from '../components/Hero.jsx'
import Masonry from '../components/Masonry.jsx'
import * as actions from '../actions/story-actions'

 /*
  * Component
  */
class HomePage extends Component {
/*
 * Get Stuff when this page loads
 */
  componentWillMount(){
    // get the count
    this.props.getCount()
    // get the stories to display
    this.props.getContent()
    // get my submitted stories
    this.props.getMyStories()
  }
  /*
   * Render
   */
  render () {
    return (
      <div>
          <Hero />
          <Masonry />
      </div>
    )
  }
}
/*
 * Redux
 */
export default connect(null, actions)(HomePage);
