import {
  SET_USERS,
} from '../types/usersTypes';

const initialState = {
  isLoading: false,
  list: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
