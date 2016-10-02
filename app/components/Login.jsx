import React from 'react';

// This is really a lot of html
class Login extends React.Component {
  render (){
    return (
      <div>
        <div className="login container">
       		<div className="row">
       			<div className="col-sm-6 col-sm-offset-3 panel panel-primary">
       				<div className="panel-body">
       					<form method="POST" action="#" role="form">
       						<div className="form-group">
       							<h2>Create account</h2>
       						</div>
       						<div className="form-group">
       							<label className="control-label" >Your name</label>
       							<input id="signupName" type="text" maxLength="50" className="form-control" />
       						</div>
       						<div className="form-group">
       							<label className="control-label" >Email</label>
       							<input id="signupEmail" type="email" maxLength="50" className="form-control" />
       						</div>
       						<div className="form-group">
       							<label className="control-label" >Email again</label>
       							<input id="signupEmailagain" type="email" maxLength="50" className="form-control" />
       						</div>
       						<div className="form-group">
       							<label className="control-label" >Password</label>
       							<input id="signupPassword" type="password" maxLength="25" className="form-control" placeholder="at least 6 characters" />
       						</div>
       						<div className="form-group">
       							<label className="control-label" >Password again</label>
       							<input id="signupPasswordagain" type="password" maxLength="25" className="form-control" />
       						</div>
       						<div className="form-group">
       							<button id="signupSubmit" type="submit" className="btn btn-info btn-block">Create your account</button>
       						</div>
       						<hr />
       						<p>Already have an account? <a href="#">Sign in</a></p>
       					</form>
       				</div>
       			</div>
       		</div>
       	</div>
      </div>
    )
  }
}

export default Login;
