import React, { Component } from 'react'

class FullStory extends Component {
  render () {
    let { content, approve, deleteStory } = this.props
    return (
      <div className='full'>
        <h4>{content.postedBy.firstName} {content.postedBy.lastName}</h4>
        <h4>{content.created_at.slice(0,10)}</h4>
        <img className="img-responsive" src={content.image} />
        <h4>{content.title}</h4>
        <p>{content.body}</p>
        <div className="row">
          <div className="col-sm-4">
            <button onClick={approve.bind(this,content._id)} className="btn btn-success">Approve</button>
          </div>
          <div className="col-sm-4">
            <button onClick={deleteStory.bind(this,content._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FullStory;
