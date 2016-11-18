import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_ERROR,
  GET_CONTENT,
  GET_ALL_USERS,
  SWITCH_VIEW,
  REMOVE,
  UPADTE_USER
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


/*
 * Content Control
 */
export function switchView(payload) {
  return {
    type: SWITCH_VIEW,
    payload
  }
}
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
    return axios.put(`/api/admin?id=${id}`)
      .then( () => {
        browserHistory.push('/admin')
      })
  }
}

export function deleteStory(id) {
  return dispatch => {
    return axios.delete(`/api/admin?id=${id}`)
      .then( () => {
        browserHistory.push('/admin')
      })
  }
}


/*
 * User Control
 */

export function getUsers(page=1) {
  return dispatch => {
    return axios.get(`/api/admin/users?page=${page}`)
      .then( res => {
        dispatch({
          type: GET_ALL_USERS,
          payload: res.data.users
        })
      })
  }
}

export function deleteUser(id) {
  return dispatch => {
    return axios.delete(`/api/auth/user?id=${id}`)
    .then( () => {
          dispatch({
            type: REMOVE,
            payload: id
          })
      })
  }
}

export function switchRoles(id) {
  return dispath => {
    return axios.put(`/api/auth/user?id=${id}`)
    .then( (res) => {
      dispath({
        type: UPADTE_USER,
        payload: res.data.user
      })
    })

  }
}
