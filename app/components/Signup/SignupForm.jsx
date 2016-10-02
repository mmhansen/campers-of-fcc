import React from 'react';

class SignupForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      emailConfirmation: ""
    }
    // bind this to our event handlers so we don't have to do it somehwere else
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //
  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  //
  render (){
    return (
      <div className="panel-body">
        <form method="POST" action="#" role="form">
          <div className="form-group">
            <h2>Create account</h2>
          </div>
          <div className="form-group">
            <label className="control-label" >Username</label>
            <input
              id="signupName"
              type="text"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="username" />
          </div>
          <div className="form-group">
            <label className="control-label" >Email</label>
            <input
              id="signupEmail"
              type="email"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="email" />
          </div>
          <div className="form-group">
            <label className="control-label" >Email Confirmation</label>
            <input
              id="signupEmailagain"
              type="email"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="emailConfirmation"/>
          </div>
          <div className="form-group">
            <label className="control-label" >Password</label>
            <input
              id="signupPassword"
              type="password"
              maxLength="25"
              className="form-control"
              placeholder="at least 6 characters"
              value={this.state.name}
              onChange={this.onChange}
              name="password"/>
          </div>
          <div className="form-group">
            <label className="control-label" >Password Confirmation</label>
            <input
              id="signupPasswordagain"
              type="password"
              maxLength="25"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="passwordConfirmation"/>
          </div>
          {
          // this button needs to take you somewhere
          // right now it throws error about engine
          }
          <div className="form-group">
            <button
              id="signupSubmit"
              type="submit"
              className="btn btn-info btn-block"
              onSubmit={this.onSubmit}>Create your account</button>
          </div>
          <hr />
          {
          // route to sign in page
          }
          <p>Already have an account?
            <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    )
  }
}


export default SignupForm;
