import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPending } from '../../actions/admin-actions'

/*
 * Admin Control Component
 */
class AdminPage extends Component {

  componentWillMount(){
    // get the stories
    this.props.getPending()
  }
  onClick(e){
    e.preventDefault();
    // get the stories
    this.props.getPending()
  }
  render (){
    let { content } = this.props

    let childElements = content.map((x,i) => {
        return(
          <div className="row story" key={i}>
            <div className="col-sm-4">
              <span className="title">Author: </span>
              <span className="content">{ x.postedBy.firstName +" "+x.postedBy.lastName }</span>
            </div>
            <div className="col-sm-4">
              <span className="title">Date Submitted: </span>
              <span className="content">{ x["created_at"].slice(0,10) }</span>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-default">Review</button>
            </div>
          </div>
        )
      })

    return (
      <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2" id="admin">
        <div className="panel panel-login">
          <div className="panel-heading">
            <button onClick={this.onClick.bind(this)} className="btn btn-default">Refresh</button>
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
export default connect(mapStateToProps, { getPending })(AdminPage);
