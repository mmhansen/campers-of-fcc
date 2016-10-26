import {
  SET_USER,
  SET_USER_ROLE,
  GET_CONTENT,
  SWITCH_VIEW
} from '../actions/types'

let initialState = {
  userFullName: null,
  role: null,
  content: [],
  view: 'admin'
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
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload
      }
    case SWITCH_VIEW:
      return {
        ...state,
        view: (state.view === 'admin') ? 'content' : 'admin'
      }
    default:
      return state
  }
}
