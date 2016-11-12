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
    // get the stories to display
    this.props.getContent()
    // get the count
    this.props.getCount()
    // get my submitted stories
    //this.props.getMyStories()
  }
  /***/
  fetchStories (page) {
    return () => {
      this.props.getContent(page)
    }
  }
  /*
   * Render
   */
  render () {
    let { page, count } = this.props
    let dis = true
    let nextDis = false
    if (page > 1) dis = false
    if (page === Math.ceil(count/20) ) nextDis = true

    // get me the next/previous page
    let controls = (
      <div className=" home-controls">
          <button disabled={dis}
             className="btn btn-default left-control" onClick={this.fetchStories(page-1).bind(this)}>&#x02AA6;</button>
          <button disabled={nextDis}
             className="btn btn-default right-control" onClick={this.fetchStories(page+1).bind(this)}>&#x02AA7;</button>
      </div>
    )

    return (
      <div>
          <Hero />
          <Masonry current={this.props.current}/>
          <div>
            { controls }
          </div>


      </div>
    )
  }
}
/*
 * Redux
 */
const mapStateToProps = (state) => {
  return {
    current: state.content.current,
    page: state.content.page,
    count: state.content.count
  }
}
export default connect(mapStateToProps, actions)(HomePage);
