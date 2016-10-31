import { combineReducers } from 'redux'
/*
 * Reducers
 */
import { reducer as form } from 'redux-form'
import user  from './user'
import content from './content'
/*
 * Split State
 */
var rootReducer = combineReducers({
  user,
  content,
  form
})

export default rootReducer
