import Storage from '../../services/Storage';
import NotifyResponse from '../../services/SrotageDecorator';

import { UPDATE_EVENTS, GET_EVENTS } from '../types/eventsTypes';

const storageInstance = Storage.getInstance();
const db = new NotifyResponse(storageInstance);

export const loadEvents = () => async (dispatch) => {
  const req = await db.getAllEvents();

  if (!req) return;

  dispatch({
    type: GET_EVENTS,
    payload: await req,
  });
};

export const removeEvent = (id) => async (dispatch) => {
  const req = await db.removeEvent(id);

  if (!req) return;

  dispatch({
    type: UPDATE_EVENTS,
  });
};

export const createNewEvent = (data) => async (dispatch) => {
  const req = await db.setEvent(data);

  if (!req) return;

  dispatch({
    type: UPDATE_EVENTS,
  });
};
