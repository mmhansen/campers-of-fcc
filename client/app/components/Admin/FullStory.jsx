import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getStory } from '../../actions/story-actions'

class FullStory extends Component {

  componentWillMount() {
    let storyId = this.props.location.pathname.match(/[a-f0-9]{24}/)
    this.props.getStory(storyId)
  }

  render () {
    let { story } = this.props

    return (
      <div className='full'>

        <h4>{story.postedBy.firstName} {story.postedBy.lastName}</h4>
        <h4>{story.created_at.slice(0,10)}</h4>
        <img className="img-responsive" src={story.image} />
        <h4>{story.title}</h4>
        <p>{story.body}</p>
        <div className="row">
          <div className="col-sm-3">
            <button className="btn btn-success">Approve</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-danger">Delete</button>
          </div>
          <div className="col-sm-3">
            <Link to="/admin" className="btn btn-danger">
              Back to Stories
            </Link>
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

export default connect(mapStateToProps, { getStory })(FullStory)
