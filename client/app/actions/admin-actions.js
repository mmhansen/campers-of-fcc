import axios from 'axios'
import {
  AUTH_ERROR,
  GET_CONTENT,
  GET_ALL_USERS,
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



export function switchView(view){
  return {
    type: SWITCH_VIEW,
    payload: view
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
    return axios.delete(`/api/auth/user/${id}`)
  }
}
