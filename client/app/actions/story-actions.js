/*
 * Imports
 */
import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import { errorHandler } from './utils'
import {
  GET_COUNT,
  STORY_ERROR,
  FETCH_STORIES
} from './types'

/*
 * Handle Post
 */
export function addNewStory (data) {
  let user = cookie.load('user')
  data.postedBy = user._id
  return dispatch => {
    return axios.post('/api/content/', data)
      .then( (resp) => {
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
export function getContent (page=1) {
  return dispatch => {
    return axios.get(`/api/content/?page=${page}`)
      .then( res => {
        dispatch({
          type: FETCH_STORIES,
          page: page,
          payload: res.data.content
        })
      } )
      .catch( err => err )

  }
}

/*
 * Get the number of stories in the DB
 */
 export function getCount() {
   return dispatch => {
     return axios.get('/api/content/count')
          .then((res) => {
            console.log(res.data)
            dispatch({
              type: GET_COUNT,
              count: res.data.count
            })
          })
   }
 }
