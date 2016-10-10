import axios from 'axios';
import { browserHistory } from 'react-router';

export function userLoginRequest(data){
  return dispatch => {
    return axios.post('/api/users/login', data)
    .then((resp) => {
      console.log(resp)
      browserHistory.push('/')
    })
    .catch((err) => {
      console.log(err)
      return err
    })
  }
}
