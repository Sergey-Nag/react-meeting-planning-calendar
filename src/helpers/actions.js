import Storage from '../services/Storage';

const store = Storage.getInstance();

import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING
} from './actionsTypes';

export const setUsers = () => async (dispatch) => {
  dispatch({
    type: SET_USERS_LOADING,
    payload: true,
  });

  try {
    const req = await store.getAllUsers();

    if (!req) throw new Error();

    dispatch({
      type: SET_USERS,
      payload: await req,
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
