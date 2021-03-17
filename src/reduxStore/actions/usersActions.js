import Storage from '../../services/Storage';
import createUser from '../../users/createUser';

import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
} from '../types/usersTypes';

const store = Storage.getInstance();

const mapUsers = (users) => users.map((user) => createUser(user));

const loadUsers = () => async (dispatch) => {
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
};

export default loadUsers;
