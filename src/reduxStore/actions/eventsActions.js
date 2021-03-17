import Storage from '../../services/Storage';

import {
  SET_EVENTS,
  SET_EVENTS_ERROR,
  SET_EVENTS_LOADING,
} from '../types/eventsTypes';

const store = Storage.getInstance();

const loadEvents = () => async (dispatch) => {
  dispatch({
    type: SET_EVENTS_LOADING,
    payload: true,
  });

  try {
    const req = await store.getAllEvents();

    if (!req) throw new Error();

    dispatch({
      type: SET_EVENTS,
      payload: await req,
    });
  } catch (e) {
    dispatch({
      type: SET_EVENTS_ERROR,
      payload: e,
    });
  } finally {
    dispatch({
      type: SET_EVENTS_LOADING,
      payload: false,
    });
  }
};

export default loadEvents;
