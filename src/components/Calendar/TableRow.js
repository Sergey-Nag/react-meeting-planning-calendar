import React, { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import Card from '../Card/Card';

export default function TableRow({ time, events }) {
  const [{ authUser }] = useContext(UsersContext);

  return (
    <tr>
      <th>{time}</th>
      {events.map(({ day, event }) => (
        <td key={day}>
          {authUser && event && <Card key={day} id={event.id} title={event.title} />}
        </td>
      ))}
    </tr>
  );
}
