import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth_reducer  from './auth.js'

var rootReducer = combineReducers({
  auth: auth_reducer,
  form
})

export default rootReducer
