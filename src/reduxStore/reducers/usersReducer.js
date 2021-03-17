import {
  SET_USERS,
  SET_USERS_LOADING,
  SET_USERS_ERROR,
} from '../types/usersTypes';

const initialState = {
  error: null,
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
    case SET_USERS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
