import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/story-actions'
import moment from 'moment';

$(document).ready(function(){
  var $url = window.location.href;

  var $fb = $('#share-fb');
  var $tw = $('#share-tw');

  $fb.attr('href','http://www.facebook.com/sharer.php?u=' + $url);
  $tw.attr('href', 'http://twitter.com/share?url=' + $url + '&amp;text=This is an awesome story!!!&amp;hashtags=campfirestories');
});

class FullStoryPage extends Component {
  render () {

    let { image, title, body, created_at, postedBy: { firstName, lastName } } = this.props.story
    let time = moment(created_at, "YYYY-MM-DD").format('LL');

    return (
      <div id="full-story">
        <div className="section top-offset-small">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 no-padding-picture">
                <div className="post-header">
                  <h1 className="post-title">{`${firstName} ${lastName}`}</h1>
                  <p className="post-date">Published on {time}</p>
                </div>
                <img src={image} className="img-responsive post-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-white padding-top">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <p>{body}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-white padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 social-buttons">


                  <a href="#" id="share-fb" target="_blank"><i className="fa fa-facebook"></i></a>

                  <a href="#" id="share-tw" target="_blank"><i className="fa fa-twitter"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function matchStory(state){
  const path = state.content.path
  return state.content.current.filter(({ _id }) => {
    return _id === path
  })[0]

}


function mapStateToProps(state) {
  return {
    story: matchStory(state),
  }
}

export default connect(mapStateToProps, actions)(FullStoryPage)
