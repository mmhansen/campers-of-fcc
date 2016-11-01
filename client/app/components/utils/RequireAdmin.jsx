import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleNotAdmin } from '../../actions/admin-actions'
import { logoutUser } from '../../actions/authentication-actions'

export default function(ComposedComponent) {
  class RequireAdmin extends Component {
    checkAdmin() {
      if (!this.props.authenticated) {
        this.props.handleNotAdmin('You are not authorized to do this. Please login with an admin account.')
        this.context.router.push('/au/login');
      } else if (this.props.role !== "Admin")  {
        this.props.handleNotAdmin('You are not authorized to do this. Please login with an admin account.')
        this.props.logoutUser()
        this.context.router.push('/au/login');
      }
    }

    componentWillMount() {
      this.checkAdmin()
    }

    componentWillUpdate(nextProps) {
      this.checkAdmin()
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.user.authenticated,
      role: state.user.role
    };
  }

  RequireAdmin.contextTypes = {
    router: React.PropTypes.object
  }

  return connect(mapStateToProps, { handleNotAdmin, logoutUser })(RequireAdmin);
}
