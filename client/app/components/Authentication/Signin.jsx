import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { renderField, renderAlert } from '../utils/formFields'
import { loginUser } from '../../actions/authentication-actions'
import { validateLogin as validate } from '../../utils/validation'


const loginForm = reduxForm({
  form: 'login',
  validate: validate
})

class LoginForm extends React.Component {
  constructor (props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  //
  onSubmit({email, password}){
    this.props.loginUser({email, password})
  }
  //
  render (){

    const { handleSubmit } = this.props

    return (
      <form id="login-form" onSubmit={ handleSubmit(this.onSubmit) } >
          {renderAlert(this.props.errorMessage)}
          <div className="form-group">
            <Field type="text" name="email" component={renderField} label="Email" id="username" tabIndex="1" className="form-control" placeholder="Username"/>
          </div>
          <div className="form-group">
            <Field type="password" name="password" component={renderField} label="Password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
              <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                      <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                  </div>
              </div>
          </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.user.error
  }
}

export default connect(mapStateToProps, { loginUser })(loginForm(LoginForm))
