import { login } from '../api/login';

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from '../constants';

export function loginUser(credentials) {
  const username = credentials.username;
  const password = credentials.password;
  // return login(username, password).then(
  //   function(result) {
  //   dispatch({
  //     type: LOGIN_USER_SUCCESS,
  //     payload: result
  //   }); },
  //   function(result) {
  //     dispatch({
  //       type: LOGIN_USER_ERROR,
  //       payload: result
  //     }); });
  return (dispatch) => {
    const username = credentials.username;
    const password = credentials.password;
    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR,
      ],
      payload: {
        promise: login(username, password)
      },
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
