import axios from "axios";
import cookie from "react-cookie"
import { browserHistory } from "react-router"

import { AUTH_USER, AUTH_ERROR } from './types'

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    //logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function registerUser(userData){
  return dispatch => {
    return axios.post('/api/auth/register', userData)
    .then((resp) => {
      //  this only gets called with 200 codes
      cookie.save('token', resp.data.token, { path: '/' })
      dispatch({type: AUTH_USER})

    })
    .catch((err) => {
      errorHandler(dispatch, err, AUTH_ERROR)
    })
  }
}
