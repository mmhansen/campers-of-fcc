import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../../actions/authentication-actions'

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return null
  }
}

export default connect(null, { logoutUser })(LogoutPage)
