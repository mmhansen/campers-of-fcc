import React from 'react';

class LoginForm extends React.Component {
  constructor (props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  }
  
  //
  onSubmit(e){
    e.preventDefault();
  }
  //
  render (){
    // destructuring state in variables
    const { errors, identifier, password, isLoading } = this.state;
    //
    return (
      <div className="">
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>

        <div className="form-group">
          <label className="control-label" >Username/Email</label>
          <input
            className="form-control"
            name="identifier"
            label="Username / Email"
            value={identifier}
            onChange={this.onChange}
          />
      </div>

      <div className="form-group">
        <label className="control-label" >Password</label>
          <input
            className="form-control"
            name="password"
            label="Password"
            value={password}
            onChange={this.onChange}
            type="password"
            />
        </div>

          <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
        </form>
      </div>
    )
  }
}

export default LoginForm;
