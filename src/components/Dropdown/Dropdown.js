import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import loadEvents from '../../reduxStore/actions/eventsActions';
import { FILTER_EVENTS } from '../../reduxStore/types/eventsTypes';

export default function Dropdown(users) {
  // const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const filterEventByUser = (value) => {
    if (value === 'all') {
      dispatch(loadEvents());
    } else {
      dispatch({
        type: FILTER_EVENTS,
        payload: ({ data }) => data.participants.includes(value),
      });
    }
  };

  return (
    <Form.Control
      as="select"
      custom
      defaultValue="all"
      onChange={(e) => filterEventByUser(e.target.value)}
    >
      <option value="all">All members</option>
      {users.users.map(({ name }) => (
        <option key={`user-${name}`} value={name}>
          {name}
        </option>
      ))}
    </Form.Control>
  );
}
