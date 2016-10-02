import React from 'react';
//components
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render (){
    return (
      <div className="container">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
   				<SignupForm />
   			</div>
     	</div>
      </div>
    )
  }
}

export default SignupPage;
