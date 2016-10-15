import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { renderField, renderAlert } from '../common/formFields'
import { loginUser } from '../../actions/authentication-actions'


const loginForm = reduxForm({
  form: 'login'
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
      <div className="">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {renderAlert(this.props.errorMessage)}
          <div className="form-group">
            <h2>Login</h2>
          </div>
          <Field type="text" name="email" component={renderField} label="Email" />
          <Field type="password" name="password" component={renderField} label="Password" />

          <div className="form-group">
            <button type="submit"
              className="btn btn-info btn-block">
              Login</button>
          </div>
          <hr />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps, { loginUser })(loginForm(LoginForm))
