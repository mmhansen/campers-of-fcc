import React from 'react';
//components
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render (){
    return (
      <div className="container" id="login-page">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
   				<LoginForm />
   			</div>
     	</div>
      </div>
    )
  }
}

export default LoginPage;
