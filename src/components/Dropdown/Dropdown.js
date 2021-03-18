import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { loadEvents, filterByParticipants } from '../../reduxStore/actions/eventsActions';
import AuthContext from '../../contexts/AuthContext';

export default function Dropdown({ users }) {
  const [authUser] = useContext(AuthContext);
  const dispatch = useDispatch();

  const filterEventByUser = (value) => {
    if (value === 'all') {
      dispatch(loadEvents());
    } else {
      dispatch(filterByParticipants(value));
    }
  };

  return (
    <Form.Control
      as="select"
      disabled={!authUser.access.filterEvents}
      custom
      defaultValue="all"
      onChange={(e) => filterEventByUser(e.target.value)}
    >
      {authUser.access.filterEvents && (
        <>
          <option value="all">All members</option>
          {users.map(({ name }) => (
            <option key={name}>{name}</option>
          ))}
        </>
      )}

      {!authUser.access.filterEvents && <option>{authUser.name}</option>}
    </Form.Control>
  );
}
