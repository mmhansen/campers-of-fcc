import axios from 'axios'
import {
  AUTH_ERROR,
  GET_CONTENT,
  SWITCH_VIEW
} from './types'
import cookie from 'react-cookie'

/*
 * Helper
 */
const getContent = (res) => {
  return {
    type: GET_CONTENT,
    payload: res.data.payload
  }
}



export function switchView(type){
  return dispatch => {
    if (type === 'user') {
      return axios.get('/api/admin/')
        .then((res) => {
          dispatch(getContent(res))
        })
    } else {
      return axios.get('/api/auth/user')
        .then((res) => {
          dispatch(getContent(res))
        })
    }
  }
}

/*
 * Content Control
 */
export function handleNotAdmin(errorMessage) {
  return {
    type: AUTH_ERROR,
    payload: errorMessage
  }
}

/*
 * Approving and Deleting Stories
 */
const token = cookie.load('token');
axios.defaults.headers.common['authorization'] = token;


export function approveStory(id) {
  return dispatch => {
    return axios.put(`/api/admin/${id}`)
  }
}

export function deleteStory(id) {
  return dispatch => {
    return axios.delete(`/api/admin/${id}`)
  }
}


/*
 * User Control
 */
export function deleteUser(id) {
  return dispatch => {
    return axios.delete(`/api/auth/user/${id}`)
  }
}
