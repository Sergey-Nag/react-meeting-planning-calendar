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
