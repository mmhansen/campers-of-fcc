import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/admin-actions'
import FullStory from './FullStory'
/*
 * Admin Control Component
 */
class AdminPage extends Component {
  /*
   * Retrieve Content pending approval
   */
  componentWillMount(){
    this.props.getUser()
  }
  updateContent(e){
    e.preventDefault();
  }

  /*
   * User control
   */

  /*
   * Rendering
   */
  render (){
    let { content, approveStory, deleteStory, view, switchView, deleteUser } = this.props

    let childElements = [];

    if (view === 'admin') {
      childElements = content.map((x,i) => {
        let name = x.firstName +" "+x.lastName;
        return (
          <div key={i} className="col-sm-3">
            <div className="item">
              <h4>{name}</h4>
              <hr />
              <button className="btn btn-default">Admin</button>
              <button onClick={(e) => {deleteUser(e.target.name)}} name={x._id} className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      })
    } else {
      childElements = content.map((x,i) => {
        let name = x.postedBy.firstName +" "+x.postedBy.lastName;
        return (
          <div key={i} className="col-sm-3">
            <div className="item">
              <h4>{name}</h4>
              <hr />
              <button className="btn btn-default">Admin</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      })
    }

    return (
      <div className="col-xs-12" id="admin">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-2 col-md-offset-1">
            {/* controls */}
            <div className="card controls">
                <button onClick={switchView} className="btn btn-lg btn-default">{view}</button>
                <button onClick={this.updateContent.bind(this)} className="btn btn-lg btn-default">Refresh</button>
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
