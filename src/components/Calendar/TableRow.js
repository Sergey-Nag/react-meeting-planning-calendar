import React, { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import EventCard from '../Card/EventCard';

export default function TableRow({ time, events }) {
  const [{ authUser }] = useContext(UsersContext);

  return (
    <tr>
      <th>{time}</th>
      {events.map(({ day, event }) => (
        <td key={day}>
          {authUser && event && (
            <EventCard
              key={day}
              id={event.id}
              title={event.title}
            />
          )}
        </td>
      ))}
    </tr>
  );
}
