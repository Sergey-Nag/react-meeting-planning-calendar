import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Storage from '../../services/Storage';
import EventsContext from '../../contexts/EventsContext';

const store = Storage.getInstance();

export default function Dropdown(users) {
  const [events, setEvents] = useContext(EventsContext);

  const filterEventByUser = (value) => {
    store.preFilter =
      value === 'all'
        ? null
        : ({ participants }) => participants.includes(value);

    setEvents({
      ...events,
      ...{
        count: events.count + 1,
      },
    });
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
