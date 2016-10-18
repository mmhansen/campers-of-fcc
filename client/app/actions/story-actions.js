/*
 * Imports
 */
import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import { errorHandler } from './utils'
import { ADD_NEW_STORY, STORY_ERROR } from './types'

/*
 * Handle Post
 */
export function addNewStory (data) {
  let user = cookie.load('user')
  data.postedBy = user._id
  return dispatch => {
    return axios.post('/api/content/', data)
      .then( (resp) => {
        dispatch({
          type: ADD_NEW_STORY,
          story: resp.data.story
        })
        browserHistory.push('/')
      })
      .catch( (err) => {
        errorHandler(dispatch, err, STORY_ERROR)
      })
  }
}

export function createStoryValidationError(error) {
  return {
    type: STORY_ERROR,
    payload: error
  }
}

/*
 * Handle Get
 */
export function getContent (page) {
  return axios.get(`/api/content/?page=${page}`)
    .then( res => res )
    .catch( err => err )
}
