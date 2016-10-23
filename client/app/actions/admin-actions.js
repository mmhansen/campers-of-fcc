import axios from 'axios'
import {
  AUTH_ERROR,
  GET_PENDING
} from './types'
import cookie from 'react-cookie'

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

/*
 * Approving and Deleting Stories
 */

const token = cookie.load('token');
console.log(token)
let config = {
  headers: { 'authorization': token }
}

export function approveStory(id) {
  return dispatch => {
    return axios.put(`/api/admin/${id}`, config)
  }
}

export function deleteStory(id) {
  return dispatch => {
    return axios.delete(`/api/admin/${id}`, config)
  }
}
