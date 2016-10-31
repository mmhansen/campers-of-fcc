import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getStory } from '../../actions/story-actions'
import { approveStory, deleteStory } from '../../actions/admin-actions'

class FullStory extends Component {

  componentWillMount() {
    let storyId = this.props.location.pathname.match(/[a-f0-9]{24}/)
    this.props.getStory(storyId)
  }

  render () {
    let { story, approveStory, deleteStory } = this.props

    return (
      <div className="col-xs-12 full">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
            <h4>{story.postedBy.firstName} {story.postedBy.lastName}</h4>
            <h4>{story.created_at.slice(0,10)}</h4>
            <div className="row">
              <div className="col-sm-6 ">
                <img className="img-responsive" src={story.image} />
              </div>
            </div>
            <h4>{story.title}</h4>
            <p>{story.body}</p>
            <br />
            <br />
            <div className="row">
              <div className="col-sm-3">
                <button onClick={() => {approveStory(story._id)}} className="btn btn-success">Approve</button>
              </div>
              <div className="col-sm-3">
                <Link to="/edit" className="btn btn-primary">
                  Edit
                </Link>
              </div>
              <div className="col-sm-3">
                <button onClick={() => {deleteStory(story._id)}} className="btn btn-danger">Delete</button>
              </div>
              <div className="col-sm-3">
                <Link to="/admin" className="btn btn-default">
                  Back to Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.stories.currentStory
  }
}

export default connect(mapStateToProps, { getStory, approveStory, deleteStory })(FullStory)
