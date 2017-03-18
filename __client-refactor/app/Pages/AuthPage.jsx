import React, { Component } from 'react'
import AuthHeader from '../components/Authentication/AuthHeader'
import AuthForm from '../components/Authentication/AuthForm'

class AuthContainer extends Component {
  render () {
    let currentRoute = this.props.location.pathname

    return (
      <div className="container-fluid" id="login-page">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className=" top-offset panel panel-login">
              <AuthHeader location={currentRoute} />
              <AuthForm location={currentRoute} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthContainer
