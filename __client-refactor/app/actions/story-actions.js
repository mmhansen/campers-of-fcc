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
  FETCH_STORIES,
  FETCH_STORY,
  REMOVE_CURRENT,
  GET_MY_STORIES,
  UPDATE_PATH,
  HANDLE_STORY_BODY,
  EMPTY_BODY
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
export function getContent (page=1, limit=10, status='Approved', type=FETCH_STORIES) {
  return dispatch => {
    return axios.get(`/api/content/?page=${page}&limit=${limit}&status=${status}`)
      .then( res => {

        dispatch({
          type,
          page: page,
          payload: res.data.content
        })
      } )
      .catch( err => err )

  }
}

/**
 *
 */
 export function getStory(storyId) {
   return dispatch => {
     return axios.get(`/api/content/${storyId}`)
      .then(res => {
        dispatch({
          type: FETCH_STORY,
          payload: res.data.story
        })
      })
   }
 }

/*
 * Get the number of stories in the DB
 */
 export function getCount() {
   return dispatch => {
     return axios.get('/api/content/count')
          .then((res) => {
            dispatch({
              type: GET_COUNT,
              count: res.data.count
            })
          })
   }
 }


 /*
  * Empty current story part of state
  */
export function removeCurrent() {
  return {
    type: REMOVE_CURRENT
  }
}

/*
 * Update story
 */
export function updateStory(data, id) {
  return dispatch => {
    return axios.put(`/api/content?id=${id}`, data)
    .then( () => {
      browserHistory.push('/')
    })
  }
}

/*
 * Get my Stories
 */
export function getMyStories () {
  return dispatch => {
    let user = cookie.load('user')

    return axios.get(`api/content/my?id=${user._id}`)
      .then( (res) => {
        dispatch({
          type: GET_MY_STORIES,
          payload: res.data.story
        })
      })
  }
}
/*
 * get path address
 */
export function updatePath(path) {
  return {
    type: UPDATE_PATH,
    payload: path
  }
}

export function emptyBody(){
  return {
    type: EMPTY_BODY
  }
}

export function handleStoryBody(payload){
  return {
    type: HANDLE_STORY_BODY,
    payload
  }
}
