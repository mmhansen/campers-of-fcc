import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateForm from '../components/CreateOrEdit/CreateForm'
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
        <CreateForm path={path} />
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
