import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Card from '../Card/Card';

export default function Calendar() {
  const data = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    times: [...Array(9)].map((el, i) => `1${i}:00`),
  };

  useEffect(() => {
    document.title = 'Calendar';
  }, []);

  return (
    <Table bordered className="calendar">
      <thead className="calendar__head">
        <tr className="text-center">
          <th>Time</th>
          {data.days.map((head, i) => (
            <th key={head} className="calendar__col">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="calendar__body">
        {data.times.map((time) => (
          <tr key={time}>
            <th key="i">{time}</th>

            {data.days.map((day) => (
              <td key={`${day}-${time}`} data-day={day} data-time={time}>
                <Card event={{ title: 'hello world' }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
