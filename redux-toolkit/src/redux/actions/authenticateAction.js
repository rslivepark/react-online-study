import { authActions } from '../reducers/authenticateReducer';

function login(id, password) {
  return (dispatch, getState) => {
    // dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } });
    dispatch(authActions.login({ id, password }));
  };
}

function logout(id, password) {
  return (dispatch, getState) => {
    dispatch(authActions.logout({ id, password }));
  };
}

export const authenticateAction = { login, logout };
