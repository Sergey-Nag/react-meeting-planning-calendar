import { SHOW_POPUP } from '../types/alertsTypes';

// eslint-disable-next-line import/prefer-default-export
export const showPopup = (theme, text) => ({
  type: SHOW_POPUP,
  payload: { theme, text },
});
