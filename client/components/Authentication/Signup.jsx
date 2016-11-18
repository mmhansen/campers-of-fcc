import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { renderField, renderAlert } from '../utils/formFields'
import * as actions from '../../actions/authentication-actions'
import { validateLogin as validate } from '../../utils/validation'


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
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <Field
                type="text"
                name="firstName"
                component={renderField}
                label="Name"
                tabIndex="1"
                className="form-control"
                placeholder="First"/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <Field
                type="text"
                name="lastName"
                component={renderField}
                label="Name"
                id="lastName" tabIndex="1" className="form-control" placeholder="Last"/>
            </div>
          </div>
        </div>

          <div className="form-group">
            <Field
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
/*
 * Redux
 */
SignupForm.propTypes = {
  registerUser: React.PropTypes.func.isRequired
}

const form = reduxForm({
  form: 'register',
  validate: validate
})

function mapStateToProps(state) {
  return {
    errorMessage: state.user.error
  }
}

export default connect(mapStateToProps, actions )(form(SignupForm));
