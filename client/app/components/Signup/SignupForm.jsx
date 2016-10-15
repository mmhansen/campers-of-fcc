import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {registerUser} from '../../actions/authentication-actions'
import { validateRegister as validate} from '../../actions/validation'
import { renderField, renderAlert } from '../common/formFields'


const form = reduxForm({
  form: 'register',
  validate: validate
})

class SignupForm extends React.Component {
  constructor (props){
    super(props);

    // bind this to our event handlers so we don't have to do it somehwere else
    this.onSubmit = this.onSubmit.bind(this);
  }

  //
  onSubmit({firstName, lastName, email, password, passwordConfirmation}){
    this.props.registerUser({firstName, lastName, email, password, passwordConfirmation})
  }

  //
  render (){
    const { handleSubmit } = this.props;

    return (
      <div className="panel-body">
        <form onSubmit={ handleSubmit(this.onSubmit) } role="form">
          {renderAlert(this.props.errorMessage)}
          <div className="form-group">
            <h2>Create account</h2>
          </div>
          <Field type="text" name="firstName" component={renderField} label="First Name" />
          <Field type="text" name="lastName" component={renderField} label="Last Name" />
          <Field type="email" name="email" component={renderField} label="Email" />
          <Field type="password" name="password" component={renderField} label="Password" />
          <Field type="password" name="passwordConfirmation" component={renderField} label="Password Confirmation" />

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
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps, { registerUser })(form(SignupForm));
