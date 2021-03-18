import Storage from '../../services/Storage';
import NotifyResponse from '../../services/SrotageDecorator';

import {
  UPDATE_EVENTS,
  GET_EVENTS,
  GET_EVENTS_ERROR,
} from '../types/eventsTypes';

const storageInstance = Storage.getInstance();
const db = new NotifyResponse(storageInstance);

export const loadEvents = () => async (dispatch) => {
  try {
    const req = await db.getAllEvents();

    if (!req) throw new Error();

    dispatch({
      type: GET_EVENTS,
      payload: await req,
    });
  } catch (e) {
    dispatch({
      type: GET_EVENTS_ERROR,
      payload: e,
    });
  }
};

export const removeEvent = (id) => async (dispatch) => {
  try {
    const req = await db.removeEvent(id);

    if (!req) throw new Error();

    dispatch({
      type: UPDATE_EVENTS,
    });
  } catch (e) {
    // dispatch({
    //   type: SET_EVENTS_ERROR,
    //   payload: e,
    // });
    console.log(e);
  }
};
