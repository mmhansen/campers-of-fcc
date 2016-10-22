import {
  SET_USER,
  SET_USER_ROLE,
  GET_PENDING
} from '../actions/types'

let initialState = {
  userFullName: null,
  role: null,
  content: []
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
    case GET_PENDING:
      return {
        ...state,
        content: action.payload
      }
    default:
      return state
  }
}
