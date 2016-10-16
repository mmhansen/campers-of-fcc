import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {registerUser} from '../../../actions/authentication-actions'
import { validateRegister as validate} from '../../../utils/validation'
import { renderField, renderAlert } from '../../common/formFields'


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
      <form onSubmit={ handleSubmit(this.onSubmit) } role="form" id="register-form" method="post" >
        {renderAlert(this.props.errorMessage)}
          <div className="form-group">
            <Field
              type="text"
              name="firstName"
              component={renderField}
              label="First Name"
              id="username"
              tabIndex="1"
              className="form-control"
              placeholder="Username"/>
          </div>
          <div className="form-group">
            <Field
              type="text"
              name="lastName"
              component={renderField}
              label="Last Name"
              id="username" tabIndex="1" className="form-control" placeholder="Username"/>
          </div>
          <div className="form-group">
            <Field
              type="email"
              name="email"
              component={renderField}
              label="Email"
              id="email" tabIndex="1" className="form-control" placeholder="Email Address"/>
          </div>
          <div className="form-group">
            <Field type="password" name="password" component={renderField} label="Password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <Field type="password" name="passwordConfirmation" component={renderField} label="Password Confirmation"
              id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
          </div>
          <div className="form-group">
              <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                      <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register" />
                  </div>
              </div>
          </div>
      </form>
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
