import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Storage from '../../services/databaseApi';
import TableRow from './TableRow';

const store = Storage.getInstance();

const TIME = [...Array(9)].map((el, i) => `1${i}:00`);
const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const DATES = TIME.reduce((arr, time) => {
  const obj = { time, days: DAY.map((day) => ({ day, event: null })) };

  arr.push(obj);

  return arr;
}, []);

function setEventsIntoDays(arr) {
  return DATES.map(({ time, days }) => ({
    time,
    days: days.map(({ day }) => {
      const dayEvent = arr.find(
        ({ data }) => data.day === day && data.time === time,
      );

      let res = null;
      if (dayEvent) {
        res = {
          id: dayEvent.id,
          ...{ ...dayEvent.data },
        };
      }
      return { day, event: res };
    }),
  }));
}

export default function Calendar() {
  const [events, setEvents] = useState(DATES);

  useEffect(async () => {
    const req = await store.getAllEvents();
    const data = setEventsIntoDays(req);
    setEvents(data);

    return () => setEvents(null);
  }, []);

  return (
    <Table bordered className="calendar">
      <thead className="calendar__head">
        <tr className="text-center">
          <th>Time</th>
          {DAY.map((day) => (
            <th key={day} className="calendar__col">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="calendar__body">
        {events.map(({ time, days }) => (
          <TableRow key={time} time={time} events={days} />
        ))}
      </tbody>
    </Table>
  );
}
