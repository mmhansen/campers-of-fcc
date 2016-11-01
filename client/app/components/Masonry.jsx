import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import * as actions from '../actions/story-actions'


const StoryContent = ({ items, page, count, getContent }) => {
  let dis = true
  let nextDis = false
  if (page > 1) dis = false
  if (page === Math.ceil(count/20) ) nextDis = true


  const fetchStories = (page) => {
      return () => {
        this.props.getContent(page)
      }
    }


  let controls = (
    <div className="row home-controls">
        <button disabled={dis}
           className="btn btn-default left-control" onClick={fetchStories(page-1)}>&#x02AA6;</button>
        <button disabled={nextDis}
           className="btn btn-default right-control" onClick={fetchStories(page+1)}>&#x02AA7;</button>
    </div>
  )
  return (
    <section className="section bg-white">
      <section className="container top-offset-large">
        <div className="row">
          <div className="col-xs-12">
            <h1>PLACE FOR STORIES</h1>
          </div>
        </div>
      </section>
    </section>
  )
}


/*
 * Redux
 */
function mapStateToProps(state) {
  return {
    items: state.content.current,
    page: state.content.page,
    count: state.content.count
  }
}

export default connect(mapStateToProps, actions)(StoryContent);
