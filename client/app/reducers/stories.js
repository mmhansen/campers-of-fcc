import { ADD_NEW_STORY, STORY_ERROR } from '../actions/types'

let initialState = {
  stories: [],
  error: null
}

export default function stories_reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_STORY:
      return {
        ...state,
        error: null,
        stories: [...state.stories, action.story]
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
