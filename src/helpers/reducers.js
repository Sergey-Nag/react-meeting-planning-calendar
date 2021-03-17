import TYPES from './actionsTypes';

const initialState = {
  users: {
    authUser: null,
    error: null,
    isLoading: false,
    list: [],
  },
  events: [],
};

export default function rootReducer(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case TYPES.SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          list: action.payload,
        },
      };
      break;
    case TYPES.SET_USERS_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: action.payload,
        },
      };
      break;
    case TYPES.SET_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          error: action.payload,
        },
      };
      break;
    default:
      return state;
  }
}
