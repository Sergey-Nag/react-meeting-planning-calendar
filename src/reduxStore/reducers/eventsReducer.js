import {
  GET_EVENTS,
  FILTER_EVENTS,
  UPDATE_EVENTS,
} from '../types/eventsTypes';

const initialState = {
  shouldReload: false,
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
    case UPDATE_EVENTS:
      return {
        ...state,
        shouldReload: !state.shouldReload,
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
