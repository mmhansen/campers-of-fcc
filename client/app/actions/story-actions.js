import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

import { errorHandler } from './utils'
import { ADD_NEW_STORY, STORY_ERROR } from './types'

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
