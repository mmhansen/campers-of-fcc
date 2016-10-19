import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import { getContent } from '../../actions/story-actions'

class Content extends Component {

  componentWillMount(){
    this.props.getContent()
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
       return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <h4>{element.title}</h4>
                <p>{element.body}</p>
            </div>
        )
    })

    let dis = true
    let nextDis = false
    if (page > 1) dis = false
    if (page === Math.ceil(count/20) ) nextDis = true

    let controls = (
      <div className="row">
        <div className="col-lg-6">
          <button disabled={dis}
             className="btn btn-default" onClick={this.fetchStories(page-1)}>Previous</button>
        </div>
        <div className="col-lg-6">
          <button disabled={nextDis}
             className="btn btn-default" onClick={this.fetchStories(page+1)}>Next</button>
        </div>
      </div>
    )

    return (
        <div>
          {controls}
          <Masonry
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
              {childElements}
          </Masonry>
          {controls}
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


export default connect(mapStateToProps, { getContent })(Content);
