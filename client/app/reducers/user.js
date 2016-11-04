import * as actions from '../actions/types'

let initialState = {
  authenticated: false,
  name: null,
  role: 'Guest',
  error: null
}

// role = Member, Admin, Guest

export default function auth_reducer(state = initialState, action) {
  switch(action.type) {
    case actions.AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null
      }
    case actions.UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
        role: 'Guest'
      }
    case actions.AUTH_ERROR:
      return { ...state, error: action.payload }
    case actions.SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      }
    case actions.SET_USER:
      return {
        ...state,
        name: action.fullName,
        role: action.role
      }
    default:
      return state
  }
}
