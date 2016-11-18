import React from 'react'
import classnames from 'classnames'
import { Link, IndexLink } from 'react-router'


const AuthHeader = ({ location }) => {
  return (
    <div className="panel-heading">
        <div className="row">
            {/* Login */}
            <div className="col-xs-6">
               <IndexLink
                 to="/login"
                 className={classnames({ "active" : (location === '/login') })}
                 id="login-link">
                 Login </IndexLink>
             </div>
             {/* Regiser */}
             <div className="col-xs-6">
               <Link
                 to="/register"
                 className={classnames({ "active" : (location === '/register') })}
                 id="register-link">
                 Register
               </Link>
            </div>

        </div>
        <hr />
    </div>
  )
}

export default AuthHeader
