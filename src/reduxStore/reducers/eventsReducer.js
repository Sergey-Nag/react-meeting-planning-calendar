import {
  SET_EVENTS,
  FILTER_EVENTS,
  SET_EVENTS_LOADING,
  SET_EVENTS_ERROR,
} from '../types/eventsTypes';

const initialState = {
  shouldReload: false,
  error: null,
  isLoading: false,
  list: [],
  __list: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        list: action.payload,
        __list: action.payload,
      };
    case SET_EVENTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_EVENTS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        list: state.__list.filter(action.payload),
      };
    default:
      return state;
  }
}
