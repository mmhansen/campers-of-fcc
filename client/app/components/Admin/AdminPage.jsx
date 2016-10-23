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
    this.props.getPending()
  }
  updateContent(e){
    e.preventDefault();
    this.props.getPending()
  }
  /*
   * Rendering
   */
  render (){
    let { content, approveStory, deleteStory } = this.props

    let childElements = content.map((x,i) => {
        return(
          <div key={i}>
            <FullStory content={x} approve={approveStory} deleteStory={deleteStory}/>
            <hr />
          </div>
        )
      })

    return (
      <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2" id="admin">
        <div className="panel panel-login">
          <div className="panel-heading">
            <button onClick={this.updateContent.bind(this)} className="btn btn-default">Refresh</button>
          </div>
          <hr />
          <div className="panel-body">
            {/* Stories to be approved */}
            { childElements }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.user.content
  }
}

export default connect(mapStateToProps, actions)(AdminPage);
