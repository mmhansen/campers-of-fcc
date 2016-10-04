import React from 'react'
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions.js';
//components
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render (){
    const { userSignupRequest } = this.props
    return (
      <div className="container">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
   				<SignupForm userSignupRequest={userSignupRequest}/>
   			</div>
     	</div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);
