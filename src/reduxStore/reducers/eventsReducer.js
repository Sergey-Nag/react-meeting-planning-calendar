import {
  GET_EVENTS,
  FILTER_EVENTS,
  GET_EVENTS_ERROR,
  UPDATE_EVENTS,
} from '../types/eventsTypes';

const initialState = {
  shouldReload: false,
  error: null,
  list: [],
  __list: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        list: action.payload,
        __list: action.payload,
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_EVENTS:
      return {
        ...state,
        shouldReload: true,
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
