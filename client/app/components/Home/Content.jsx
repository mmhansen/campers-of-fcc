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
        <div className="col-sm-12 home-page" id="content">
          <section className="container">
            <div  id="hero-content">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <h1 className="hero-headline">Welcome to the Campfire Stories</h1>
                  <p className="hero-copy">Place where Free Code Campers share their stories while on a quest of learning to code</p>
                  <a type="button" className="btn btn-default cs-btn-green-inverted" href="#">Explore Stories</a>
                  <span style={{padding: '0 12px'}}>or</span>
                  <a type="button" className="btn btn-default cs-btn-green-outline" href="https://www.freecodecamp.com/" target="_blank">Become Part of Us</a>
                </div>
              </div>
            </div>
          {/* hero content */}

            <div className="fullscreen-bg">
              <video loop muted autoPlay poster="http://touchcielo.com/alive/vid/vid.jpg" className="fullscreen-bg__video">
                  <source src="http://touchcielo.com/alive/vid/vid.webm" type="video/webm" />
                  <source src="http://touchcielo.com/alive/vid/vid.mp4" type="video/mp4" />
                  <source src="http://touchcielo.com/alive/vid/vid.ogv" type="video/ogg" />
              </video>
            </div>
            {/* end of video bg */}
            {/* gradient */}

            <div id="overlay"></div>
              {/* down arrow */}
            <a href="#">
              <span className="glyphicon glyphicon-menu-down" id="explore-stories"></span>
            </a>
          </section>
          {/* stories */}

          <section className="section bg-white">
            <section className="container top-offset-large">
              <div className="row home-page">
                  {/*controls*/}
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
