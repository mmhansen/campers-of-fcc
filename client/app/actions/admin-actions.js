import { AUTH_ERROR } from './types'

export function handleNotAdmin(errorMessage) {
  return {
    type: AUTH_ERROR,
    payload: errorMessage
  }
}
