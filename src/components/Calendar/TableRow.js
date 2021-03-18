import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import EventCard from '../EventCard/EventCard';

export default function TableRow({ time, events }) {
  const [authUser] = useContext(AuthContext);

  return (
    <tr>
      <th>{time}</th>
      {events.map(({ day, event }) => (
        <td key={day}>
          {authUser && event && (
            <EventCard
              key={`${event.id}event`}
              id={event.id}
              event={event}
            />
          )}
        </td>
      ))}
    </tr>
  );
}
