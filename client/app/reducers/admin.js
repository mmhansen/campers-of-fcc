import {
  SET_USER,
  SET_USER_ROLE,
  GET_ALL_USERS,
  SWITCH_VIEW,
  REMOVE,
  UPADTE_USER
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
    case UPADTE_USER:
      return {
        ...state,
        users: state.users.map((x) => {
          if (x._id === action.payload._id) x.role = action.payload.role
          return x
        })
      }
    default:
      return state
  }
}
