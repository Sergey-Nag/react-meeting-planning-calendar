import Storage from '../services/Storage';
import createUser from '../users/createUser';

const store = Storage.getInstance();

const mapUsers = (users) => users.map((user) => createUser(user));

import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING
} from './actionsTypes';

export const loadUsers = () => async (dispatch) => {
  dispatch({
    type: SET_USERS_LOADING,
    payload: true,
  });

  try {
    const req = await store.getAllUsers();

    if (!req) throw new Error();
    dispatch({
      type: SET_USERS,
      payload: mapUsers(await req),
    });
  } catch (e) {
    dispatch({
      type: SET_USERS_ERROR,
      payload: e,
    });
  } finally {
    dispatch({
      type: SET_USERS_LOADING,
      payload: false,
    });
  }
}

export const authorizeUser = (user) => {
  return {
    type: TYPES.AUTH_USER,
    payload: user,
  };
}