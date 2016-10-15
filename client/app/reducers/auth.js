
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types'


let initialState = {
  authenticated: false,
  error: null
}



export default function auth_reducer(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null
      }
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false
      }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
