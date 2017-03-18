import * as actions from '../actions/types'
import mockData from '../mockData'

let initialState = {
  current: mockData,
  submitted: [],
  adminUsers: [],
  adminStories: [],
  page: 1,
  count: 0,
  error: null,
  path: null,
  body: '',
  view: 'users',
  currentStory: null
}
// view is either users or stories

export default function stories_reducer(state = initialState, action) {
  switch(action.type) {
    case actions.FETCH_STORIES:
      return {
        ...state,
        page: action.page
        // current: action.payload
      }
    case actions.GET_COUNT:
      return {
        ...state,
        count: action.count
      }
    case actions.STORY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actions.GET_MY_STORIES:
      return {
        ...state,
        submitted: action.payload
      }
    case actions.UPDATE_PATH:
      return {
        ...state,
        path: action.payload
      }
    case actions.HANDLE_STORY_BODY:
      return {
        ...state,
        body: action.payload
      }
    case actions.EMPTY_BODY:
      return {
        ...state,
        body: ''
      }
    case actions.SWITCH_VIEW:
      return {
        ...state,
        view: action.payload
      }
    case actions.GET_ALL_USERS:
      return {
        ...state,
        adminUsers: action.payload
      }
    case actions.REMOVE:
      return {
        ...state,
        adminUsers: state.adminUsers.filter((x) => {
          return (x._id !== action.payload)
        })
      }
    case actions.UPADTE_USER:
      return {
        ...state,
        adminUsers: state.adminUsers.map((x) => {
          if (x._id === action.payload._id) x.role = action.payload.role
          return x
        })
      }
    case actions.FETCH_PENDING_STORIES:
      return {
        ...state,
        adminStories: action.payload
      }
    case actions.FETCH_STORY:
      return {
        ...state,
        currentStory: action.payload
      }
    default:
      return state;
  }
}
