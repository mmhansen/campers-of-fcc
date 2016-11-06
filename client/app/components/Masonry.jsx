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
       <div key={index} className="col-md-6 grid-item">
           <div className="thumbnail">
               <img src={element.image} alt="Campfire Story" />
               <div className="caption">
                   <div className="card-title">
                       <h2>{element.title}</h2>
                       <p className="card-info">
                          Posted on {time} by {element.postedBy.firstName +" "+ element.postedBy.lastName}
                       </p>
                   </div>
                   <p className="card-description">{element.body}</p>
               </div>
           </div>
       </div>
     )
  })
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
    <section className="section bg-white padding-top" id="cs-stories">
        <section className="container">
            <div className="row grid">

              <Masonry
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                {childElements}
              </Masonry>

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
