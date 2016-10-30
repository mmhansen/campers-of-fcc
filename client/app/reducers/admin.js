import {
  SET_USER,
  SET_USER_ROLE,
  GET_ALL_USERS,
  SWITCH_VIEW,
  REMOVE
} from '../actions/types'

let initialState = {
  userFullName: null,
  role: null,
  users: [],
  view: 'users'
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
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SWITCH_VIEW:
      return {
        ...state,
        view: action.payload
      }
    case REMOVE:
      return {
        ...state,
        users: state.users.filter((x) => {
          return (x._id !== action.payload)
        })
      }
    default:
      return state
  }
}
