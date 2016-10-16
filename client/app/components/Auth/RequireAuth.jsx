import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  RequireAuth.contextTypes = {
    router: React.PropTypes.object
  }

  return connect(mapStateToProps)(RequireAuth);
}
