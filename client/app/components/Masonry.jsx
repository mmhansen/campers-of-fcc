import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import * as actions from '../actions/story-actions'
import moment from 'moment'

const StoryContent = ({ current, page, count, getContent }) => {
  let dis = true
  let nextDis = false
  if (page > 1) dis = false
  if (page === Math.ceil(count/20) ) nextDis = true

  // get me the next/previous page
  const fetchStories = (page) => {
      return () => {
        this.props.getContent(page)
      }
    }
  // masonry options
  let masonryOptions = {
    transitionDuration: 0
  }
  // bricks
  let childElements = current.map(function(element, index){
    let time = moment(element.created_at, "YYYY-MM-DD").format('LL');

     return (
      <div key={index} className="col-sm-12 col-md-6 col-lg-6 card">
        <div className="brick">
          <img src={element.image} className="img-responsive"/>

          <div className="text-title">
            <p className="header">{element.title}</p>
              <div className="row info">
                <span>By {element.postedBy.firstName +" "+ element.postedBy.lastName} | On {time}</span>
              </div>
          </div>

          <div className="text-body">
            <p>{element.body}</p>

          </div>

        </div>
      </div>
    )
  })
  console.log(current)
  console.log(childElements)
  // controls
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
          <div className="col-xs-12 home-page">
              <Masonry
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                {childElements}
              </Masonry>
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
    page: state.content.page,
    count: state.content.count
  }
}

export default connect(mapStateToProps, actions)(StoryContent);
