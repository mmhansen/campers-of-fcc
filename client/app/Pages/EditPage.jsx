import React, { Component } from 'react';
import { connect } from 'react-redux'
import EditForm from '../components/CreateOrEdit/EditForm'
import Tips from '../components/CreateOrEdit/Tips'
import { updatePath, emptyBody } from '../actions/story-actions'
 /*
  * Component
  */
class CreateOrEditPage extends Component {
  componentWillMount(){
    // empty body form Field
    this.props.emptyBody()
  }

  render () {
    let path = this.props.location.pathname
    this.props.updatePath(path)
    return (
      <div className="container-fluid">
        <div className="row">
        <EditForm path={path} />
        <Tips />
        </div>
      </div>
    )
  }
}

/*
 * Redux
 */
export default connect(null, { updatePath, emptyBody })(CreateOrEditPage)
