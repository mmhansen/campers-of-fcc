import React from 'react'
import axios from 'axios'
//components
import SignupForm from './SignupForm';

class SignupPage extends React.Component {

  userSignupRequest(user){
    console.log("post req")
    axios.post('/users/add', user)
      .then(function(response) {
        console.log(response);
      }).catch(function(err) {
        console.log(err);
      });
  }

  render (){
    return (
      <div className="container">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
   				<SignupForm userSignupRequest={this.userSignupRequest.bind(this)}/>
   			</div>
     	</div>
      </div>
    )
  }
}

export default SignupPage;
