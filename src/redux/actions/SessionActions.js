import { checkCredentials } from '../../helpers/session'

import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAILURE
} from '../actionsTypes'

export function logIn( params, cb ) {
  return dispatch => {
    if ( checkCredentials( params ) ) {
      dispatch( {
        type: LOG_IN,
        payload: {
          name: params.username,
        },
      } )
      cb()
    } else {
      dispatch( {
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'Имя пользователя или пароль введены не верно',
        },
        error: true
      } )
    }
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}
