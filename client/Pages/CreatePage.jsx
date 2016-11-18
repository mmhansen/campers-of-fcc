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
      <section className="section bg-white top-offset bottom-space" id="create-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="h2">Tell Us Your Story</h2>
                </div>
                <CreateForm path={path} />
            </div>
        </div>
    </section>
    )
  }
}

/*
 * Redux
 */
export default connect(null, { updatePath, emptyBody })(CreateOrEditPage)
