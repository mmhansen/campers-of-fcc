import { SET_USER, SET_USER_ROLE } from '../actions/types'

let initialState = {
  userFullName: null,
  role: null
}

export default function admin_reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      }
    case SET_USER:
      return {
        ...state,
        userFullName: action.fullName,
        role: action.role
      }
    default:
      return state
  }
}
