import axios from "axios";
import cookie from "react-cookie"
import { browserHistory } from "react-router"

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SET_USER_ROLE } from './types'

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 403) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login with an admin account.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function registerUser(userData) {
  return dispatch => {
    return axios.post('/api/auth/register', userData)
    .then((resp) => {
      //  this only gets called with 200 codes
      cookie.save('token', resp.data.token, { path: '/' })
      cookie.save('user', resp.data.user, { path: '/'})
      dispatch({type: AUTH_USER})
      dispatch({type: SET_USER_ROLE, payload: resp.data.user.role})
      browserHistory.push('/')
    })
    .catch((err) => {
      errorHandler(dispatch, err, AUTH_ERROR)
    })
  }
}

export function loginUser(data) {
  const token = cookie.load('token')
  if (!token) {
    return dispatch => {
      return axios.post('/api/auth/login', data)
      .then((resp) => {
        cookie.save('token', resp.data.token, { path: '/' })
        cookie.save('user', resp.data.user, { path: '/' })
        dispatch({type: AUTH_USER})
        console.log(resp.data.user.role)
        dispatch({type: SET_USER_ROLE, payload: resp.data.user.role})
        browserHistory.push('/')
      })
      .catch((err) => {
        errorHandler(dispatch, err, AUTH_ERROR)
      })
    }
  }

  browserHistory.push('/')
}

export function logoutUser() {
  const token = cookie.load('token')
  if (token) {
    const user = cookie.load('user')
    return dispatch => {
      cookie.remove(token, { path: '/' })
      cookie.remove(user, { path: '/' })
      dispatch({type: UNAUTH_USER})
      browserHistory.push('/login')
    }
  }

  console.log('No cookie')
  browserHistory.push('/login')
}
