import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as adminActions from '../actions/admin-actions'
import * as storyActions from '../actions/story-actions'


 /*
  * Component
  */
class HomePage extends Component {
  componentWillMount(){
    // get users
    this.props.getUsers()
    // get pending stories
    this.props.getContent(1, 10, 'Pending')
  }
  /*
   * Render
   */
  render (){
    // content
    let { stories, users, view } = this.props
    // actions
    let {  approveStory, deleteStory, switchView, switchRoles, deleteUser  } = this.props
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
           <Link key={i} to={`/a/${story._id}`}>
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
    /*
     *
     */
    return (
      <div className="container-fluid">
        <div className="col-xs-12" id="admin">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-md-offset-1">
              {/* controls */}
              <div className="card controls">
                <button onClick={() => switchView('users') } className="btn btn-lg btn-default">Users</button>
                <button onClick={() => switchView('stories') } className="btn btn-lg btn-default">Stories</button>
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
      </div>
    )
  }
}

/*
 * Redux
 */

const mapStateToProps = (state) => {
  return {
    users: state.content.adminUsers,
    stories: state.content.adminStories,
    view: state.content.view
  }
}

const actions = Object.assign({}, adminActions, storyActions)
export default connect(mapStateToProps, actions)(HomePage)
