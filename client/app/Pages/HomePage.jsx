import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import Hero from '../components/Hero.jsx'
import Masonry from '../components/Masonry.jsx'
import * as actions from '../actions/story-actions'

 /** Component */
class HomePage extends Component {
/** Get Stuff when this page loads */
  componentWillMount(){
    // get the stories to display
    this.props.getContent()
    // get the count
    this.props.getCount()
    // get my submitted stories
    //this.props.getMyStories()
  }
/***/

  /** Render */
  render () {

    return (
      <div className="clearfix">
        <div>
          <Hero />
        </div>
        <div>
          <Masonry current={this.props.current}/>
        </div>
      </div>
    )
  }
}

/** Redux */
const mapStateToProps = (state) => {
  return {
    current: state.content.current,
    page: state.content.page,
    count: state.content.count
  }
}
export default connect(mapStateToProps, actions)(HomePage);
