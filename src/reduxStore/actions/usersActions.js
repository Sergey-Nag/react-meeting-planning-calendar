import Storage from '../../services/Storage';
import NotifyResponse from '../../services/SrotageDecorator';
import createUser from '../../users/createUser';

import { SET_USERS } from '../types/usersTypes';

const storageInstance = Storage.getInstance();
const db = new NotifyResponse(storageInstance);

const mapUsers = (users) => users.map((user) => createUser(user));

const loadUsers = () => async (dispatch) => {
  const req = await db.getAllUsers();

  if (!req) return;

  dispatch({
    type: SET_USERS,
    payload: mapUsers(await req),
  });
};

export default loadUsers;
