import React, { Component } from 'react'
import classnames from 'classnames'
import { Link, IndexLink } from 'react-router'

class AuthNav extends Component {
  render () {
    let registerActive = true,
          loginActive    = true;
    let current = this.props.location.pathname
    if (current === "/au/login") {
      registerActive = false
    } else {
      loginActive = false
    }
    return (
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div className="panel panel-login">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-6">
                        <IndexLink
                          to="/au/login"
                          className={classnames({ "active" : loginActive })}
                          id="login-link">
                          Login </IndexLink>
                    </div>
                    <div className="col-xs-6">
                        <Link
                          to="/au/register"
                          className={classnames({ "active" : registerActive })}
                          id="register-link">
                          Register
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Render the form component*/}
                        { this.props.children }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default AuthNav
