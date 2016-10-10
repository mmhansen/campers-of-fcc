import axios from 'axios'
import { browserHistory } from 'react-router'

export function handleStorySubmit (data) {
  return dispatch => {
    return axios.post('/api/story', data)
    .then((data)=>{})
    .catch((err)=>{
      return err;
    })
  }
}
