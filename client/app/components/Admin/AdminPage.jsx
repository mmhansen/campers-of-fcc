import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/admin-actions'
import FullStory from './FullStory'
import classnames from 'classnames'
/*
 * Admin Control Component
 */
class AdminPage extends Component {
  /*
   * When the component mounts, load in the users
   * User view is selected in default state
   */
  componentWillMount(){
    //this.props.getUser()
  }
  /*
   * Changes the view when you click the button
   */
  switchContent(e){
    e.preventDefault();
    this.props.switchView()
  }
  /*
   * Rendering
   */
  render (){
    let { content, approveStory, deleteStory, view, switchView, deleteUser } = this.props

    /*
     * Change the child element format based on if it loads Stories or Users
     */
    let childElements = content.map((x,i) => {

      if (view === 'user') {
        let name = x.firstName +" "+x.lastName;
        return (
          <div key={i} className="col-sm-3">
            <div className="item">
              <h4>{name}</h4>
              <hr />
              <button className="btn">Admin</button>
              <button onClick={(e) => {deleteUser(e.target.name)}} name={x._id} className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      } else {
        let name = x.postedBy.firstName +" "+x.postedBy.lastName;
        return (
          <div key={i} className="col-sm-3">
            <div className="item">
              <h4>{name}</h4>
              <hr />
              <button className="btn ">Admin</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      }

    })

    return (
      <div className="col-xs-12" id="admin">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-2 col-md-offset-1">
            {/* controls */}
            <div className="card controls">
                <button onClick={this.switchContent.bind(this)} className="btn btn-lg btn-default">{(view === 'user') ? 'Users' : 'Stories'}</button>
                <button onClick={""} className="btn btn-lg btn-default">Refresh</button>
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
    content: state.user.content,
    view: state.user.view
  }
}

export default connect(mapStateToProps, actions)(AdminPage);
