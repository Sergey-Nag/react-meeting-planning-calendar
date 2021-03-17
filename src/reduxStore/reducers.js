import { combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import eventsReducer from './reducers/eventsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
});

export default rootReducer;
