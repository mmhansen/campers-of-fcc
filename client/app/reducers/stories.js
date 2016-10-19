import { ADD_NEW_STORY, STORY_ERROR, FETCH_STORIES, GET_COUNT } from '../actions/types'

let initialState = {
  stories: [],
  page: 1,
  count: 0,
  error: null
}

export default function stories_reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STORIES:
      return {
        ...state,
        page: action.page,
        stories: action.payload
      }
    case GET_COUNT:
      return {
        ...state,
        count: action.count
      }
    case STORY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
