import uniqid from 'uniqid';
import {
  SHOW_CONFIRM,
  HIDE_CONFIRM,
  SHOW_POPUP,
  REMOVE_FIRST_POPUP,
  REMOVE_POPUPS,
} from '../types/alertsTypes';

const initialState = {
  isShow: false,
  type: null,
  data: [],
};

const updatedArr = (items, newItem) => [
  ...items,
  {
    ...newItem,
    id: uniqid(),
    num: items.length + 1,
  },
];

export default function alertsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        type: 'popup',
        isShow: true,
        data: updatedArr(state.data, action.payload),
      };
    case SHOW_CONFIRM:
      return {
        isShow: true,
        type: 'confirm',
        data: action.payload,
      };
    case REMOVE_FIRST_POPUP:
      return {
        ...state,
        data: state.data.slice(1),
      };
    case REMOVE_POPUPS:
      return {
        ...initialState,
      };
    case HIDE_CONFIRM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
