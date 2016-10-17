import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth_reducer  from './auth'
import admin_reducer from './admin'
import stories_reducer from './stories'

var rootReducer = combineReducers({
  auth: auth_reducer,
  user: admin_reducer,
  stories: stories_reducer,
  form
})

export default rootReducer
