import { combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import eventsReducer from './reducers/eventsReducer';
import alertsReducer from './reducers/alertsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  alerts: alertsReducer,
});

export default rootReducer;
