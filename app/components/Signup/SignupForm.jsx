import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'redux'
import { Link } from 'react-router'

import { validateRegister } from '../../server/shared/validation'


const form = reduxForm({
  form: 'register',
  validate: validateRegister
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
          <div className={classnames("form-group", {"has-error": errors.firstName})}>
            <label className="control-label" >First Name</label>
              <Field name="firstName" className="form-control" maxLength="50" component={renderField} type="text" />
          </div>
          <div className={classnames("form-group", {"has-error": errors.lastName})}>
            <label className="control-label" >Last Name</label>
            <Field name="lastName" className="form-control" maxLength="50" component={renderField} type="text" />
          </div>
          <div className={classnames("form-group", {"has-error": errors.email})}>
            <label className="control-label" >Email</label>
            <Field name="email" maxLength="50" className="form-control" component={renderField} type="text" />
          </div>
          <div className={classnames("form-group", {"has-error": errors.password})}>
            <label className="control-label" >Password</label>
            <Field name="password" maxLength="25" className="form-control" component={renderField} type="password" />
          </div>
          <div className={classnames("form-group", {"has-error": errors.passwordConfirmation})}>
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

export default connect(mapStateToProp, { registerUser })(form(SignupForm));
