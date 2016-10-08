import axios from "axios";
import {browserHistory} from 'react-router'

export function userSignupRequest(userData){
  return dispatch => {
    return axios.post('/api/users', userData)
    .then((resp) => {
      console.log(resp)
      browserHistory.push('/')
    })
    .catch((err) => {
      return err.data
    })
  }
}
