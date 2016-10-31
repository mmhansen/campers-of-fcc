import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import { getContent, getMyStories } from '../../actions/story-actions'
import moment from 'moment'

class Content extends Component {

  componentWillMount(){
    this.props.getContent()
    this.props.getMyStories()
  }

  fetchStories(page) {
    return () => {
      this.props.getContent(page)
    }
  }

  render () {
    let { items, page, count }  = this.props

    let masonryOptions = {
      transitionDuration: 0
    }

    let childElements = items.map(function(element, index){
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

    let dis = true
    let nextDis = false
    if (page > 1) dis = false
    if (page === Math.ceil(count/20) ) nextDis = true

    let controls = (
      <div className="row home-controls">
          <button disabled={dis}
             className="btn btn-default left-control" onClick={this.fetchStories(page-1)}>&#x02AA6;</button>
          <button disabled={nextDis}
             className="btn btn-default right-control" onClick={this.fetchStories(page+1)}>&#x02AA7;</button>
      </div>
    )

    return (
        <div className="col-sm-12 home-page">
          <div>
            
          </div>
          <div>
            {controls}
            <Masonry
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              >
              {childElements}
            </Masonry>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.stories.stories,
    page: state.stories.page,
    count: state.stories.count
  }
}


export default connect(mapStateToProps, { getContent, getMyStories })(Content);
