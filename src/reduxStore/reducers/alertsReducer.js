import {
  SHOW_CONFIRM,
  HIDE_CONFIRM,
  SHOW_POPUP,
  REMOVE_FIRST_POPUP,
  REMOVE_POPUPS,
} from '../types/alertsTypes';

const initialState = {
  popups: {
    isShow: false,
    data: [],
  },
  confirm: {
    isShow: false,
    data: {},
  },
};

const updatedArr = (items, newItem) => [
  ...items,
  {
    ...newItem,
    num: items[items.length - 1]?.num + 1 || 1,
  },
];

export default function alertsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        popups: {
          ...state.popups,
          isShow: true,
          data: updatedArr(state.popups.data, action.payload),
        },
      };
    case SHOW_CONFIRM:
      return {
        ...state,
        confirm: {
          isShow: true,
          data: action.payload,
        },
      };
    case REMOVE_FIRST_POPUP:
      return {
        ...state,
        popups: {
          ...state.popups,
          data: state.popups.data.slice(1),
        },
      };
    case REMOVE_POPUPS:
      return {
        ...state,
        popups: {
          ...initialState.popups,
        },
      };
    case HIDE_CONFIRM:
      return {
        ...state,
        confirm: {
          ...initialState.confirm,
        },
      };
    default:
      return state;
  }
}
