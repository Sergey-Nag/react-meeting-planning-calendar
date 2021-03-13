import React from 'react';
import Card from '../Card/Card';

export default function TableRow({ key, time, events }) {
  console.log(events);
  return (
    <tr key={key}>
      <th>{time}</th>
      {events.map(({ day, event }) => (
        <td key={day}>
          {' '}
          {event && <Card key={day} id={event.id} title={event.title} />}
        </td>
      ))}
    </tr>
  );
}
