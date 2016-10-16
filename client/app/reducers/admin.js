import { SET_USER_ROLE } from '../actions/types'

let initialState = {
  role: null
}

export default function admin_reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      }
    default:
      return state
  }
}
