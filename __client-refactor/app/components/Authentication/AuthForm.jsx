import React, { Component } from 'react'
import Login from './Signin'
import Register from './Signup'

const AuthForm = ({ location }) => {
  let form = <Login />
  if ( location === '/register') {
    form = <Register />
  }
  return (
    <div className="panel-body">
        <div className="row">
            <div className="col-lg-12">
              { form }
            </div>
        </div>
    </div>
  )
}

export default AuthForm
