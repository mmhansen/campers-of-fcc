import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../../actions/admin-actions'
import { getContent, getStory } from '../../actions/story-actions'
import FullStory from './FullStory'
import classnames from 'classnames'
/*
 * Admin Control Component
 */
class AdminPage extends Component {

  constructor(props) {
    super(props)

    this.switchContent.bind(this)
    this.fetchStory.bind(this)
  }
  /*
   * When the component mounts, load in the users
   * User view is selected in default state
   */
  componentWillMount() {
    this.props.getUsers()
    this.props.getContent(1, 10, 'Pending')

  }

  /*
   * Changes the view when you click the button
   */
  switchContent(view){
     return () => {
       this.props.switchView(view)
     }
  }

  /**
   * Fetch Story
   */
   fetchStory(storyId) {
     return () => {
       this.props.getStory(storyId)
     }
   }

  render (){
    let { stories, users, name, approveStory, deleteStory, view, switchView, switchRoles, deleteUser } = this.props

    // Change the child element format based on if it loads Stories or Users
    let childElements;
    if (view === 'users') {
      childElements = users.map((user,i) => {
      let adminButtonText = (user.role === 'Admin') ? 'Demote to user' : 'Promote to admin';

        return (
          <div key={i} className="col-sm-3">
            <div className="item">
              <h4>{`${user.firstName} ${user.lastName}`}</h4>
              <hr />
              <button onClick={() => {switchRoles(user._id)}} className="btn">{adminButtonText}</button>
              <button onClick={() => {deleteUser(user._id)}} className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      })
    } else {
      childElements = stories.map((story, i) => {
        return (
           <Link key={i} to={`/admin/review/${story._id}`}>
             <div className="col-md-4">
               <div className="item">
                 <img src={story.image} className="img-responsive"/>
                 <h4>{story.title}</h4>
                 <h5>By {story.postedBy.firstName +" "+ story.postedBy.lastName}</h5>
               </div>
             </div>
           </Link>
       )
      })
    }

    return (
      <div className="col-xs-12" id="admin">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-2 col-md-offset-1">
            {/* controls */}
            <div className="card controls">
                <button onClick={this.switchContent('users')} className="btn btn-lg btn-default">Users</button>
                <button onClick={this.switchContent('stories')} className="btn btn-lg btn-default">Stories</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7 col-md-offset-1">
            {/*  content */}
            <div className="card content">
              <div className="row">
                {childElements}
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
    name: state.user.userFullName,
    users: state.user.users,
    stories: state.stories.stories,
    view: state.user.view
  }
}

export default connect(mapStateToProps, {...actions, getContent, getStory})(AdminPage);
