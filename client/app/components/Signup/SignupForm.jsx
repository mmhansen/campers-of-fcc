import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { registerUser } from '../../actions/signupActions'


// const form = reduxForm({
//   form: 'register',
//   validate: validateRegister
// })
const form = reduxForm({
  form: 'register'
})

const renderField = field => (
    <div>
      <input className="form-control" {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

class SignupForm extends React.Component {
  constructor (props){
    super(props);

    // bind this to our event handlers so we don't have to do it somehwere else
    this.onSubmit = this.onSubmit.bind(this);
  }

  //
  onSubmit(formProps){
    e.preventDefault();
    this.props.registerUser().then(
      ({ data }) => {
        console.log(data)
      }
    );
  }
  //
  render (){
    const { handleSubmit } = this.props;

    return (
      <div className="panel-body">
        <form onSubmit={handleSubmit(this.onSubmit)} role="form">
          <div className="form-group">
            <h2>Create account</h2>
          </div>
          <div className="form-group">
            <label className="control-label" >First Name</label>
              <Field name="firstName" className="form-control" maxLength="50" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <label className="control-label" >Last Name</label>
            <Field name="lastName" className="form-control" maxLength="50" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <label className="control-label" >Email</label>
            <Field name="email" maxLength="50" className="form-control" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <label className="control-label" >Password</label>
            <Field name="password" maxLength="25" className="form-control" component={renderField} type="password" />
          </div>
          <div className="form-group">
            <label className="control-label" >Password Confirmation</label>
            <Field name="passwordConfirmation" maxLength="25" className="form-control" component={renderField} type="text" />
          </div>

          <div className="form-group">
            <button type="submit"
              className="btn btn-info btn-block">
              Create your account</button>
          </div>
          <hr />

          <p>Already have an account? &nbsp;
            <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    )
  }
}

SignupForm.propTypes = {
  registerUser: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.message,
    authenticated: state.auth.authenticated
  }
}

export default connect(null, { registerUser })(form(SignupForm));
