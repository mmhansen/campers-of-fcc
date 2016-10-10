import React from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/signupActions.js';
//components
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render (){
    const { registerUser } = this.props
    return (
      <div className="container">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
   				<SignupForm registerUser={registerUser}/>
   			</div>
     	</div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  registerUser: React.PropTypes.func.isRequired
}

export default connect(null, { registerUser })(SignupPage);
