import React from 'react'
import classnames from 'classnames'

class SignupForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: {}
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
    this.setState({ errors: {} });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      ({ data }) => {
      this.setState({ errors: data })
      }
    );
  }
  //
  render (){
    const { errors } = this.state;
    return (
      <div className="panel-body">
        <form onSubmit={this.onSubmit} role="form" method="post">
          <div className="form-group">
            <h2>Create account</h2>
          </div>
          <div className={classnames("form-group", {"has-error": errors.firstName})}>
            <label className="control-label" >First Name</label>
            <input
              id="signupName"
              type="text"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="firstName" />
            { errors.firstName && <span className="help-block">{ errors.firstName }</span> }
          </div>
          <div className={classnames("form-group", {"has-error": errors.lastName})}>
            <label className="control-label" >Last Name</label>
            <input
              id="signupName"
              type="text"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="lastName" />
            { errors.lastName && <span className="help-block">{ errors.lastName }</span> }
          </div>
          <div className={classnames("form-group", {"has-error": errors.email})}>
            <label className="control-label" >Email</label>
            <input
              id="signupEmail"
              type="email"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="email" />
            { errors.email && <span className="help-block">{ errors.email }</span> }
          </div>
          <div className={classnames("form-group", {"has-error": errors.password})}>
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
            { errors.password && <span className="help-block">{ errors.password }</span> }
          </div>
          <div className={classnames("form-group", {"has-error": errors.passwordConfirmation})}>
            <label className="control-label" >Password Confirmation</label>
            <input
              id="signupPasswordagain"
              type="password"
              maxLength="25"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
              name="passwordConfirmation"/>
            { errors.passwordConfirmation && <span className="help-block">{ errors.passwordConfirmation }</span> }
          </div>
          {
          // this button needs to take you somewhere
          // right now it throws error about engine
          }
          <div className="form-group">
            <button
              id="signupSubmit"
              className="btn btn-info btn-block">
              Create your account</button>
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

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}


export default SignupForm;
