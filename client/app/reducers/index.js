import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth_reducer  from './auth'
import admin_reducer from './admin'

var rootReducer = combineReducers({
  auth: auth_reducer,
  user: admin_reducer,
  form
})

export default rootReducer
