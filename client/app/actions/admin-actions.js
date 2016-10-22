import axios from 'axios'
import {
  AUTH_ERROR,
  GET_PENDING
} from './types'

export function handleNotAdmin(errorMessage) {
  return {
    type: AUTH_ERROR,
    payload: errorMessage
  }
}

export function getPending() {
  return dispatch => {
    return axios.get('/api/admin/')
      .then((res) => {
        dispatch({
          type: GET_PENDING,
          payload: res.data.content
        })
      })
  }
}
