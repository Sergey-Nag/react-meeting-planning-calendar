import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Storage from '../../services/databaseApi';
import TableRow from './TableRow';

const store = Storage.getInstance();

const useDb = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const resp = await store[query]();
    setData(resp);
    setLoading(false);
  }, []);

  return { data, loading };
};

const TIME = [...Array(9)].map((el, i) => `1${i}:00`);
const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const DATES = TIME.reduce((arr, time) => {
  const obj = { time, days: DAY.map((day) => ({ day, event: null })) };

  arr.push(obj);

  return arr;
}, []);

function setEventsIntoDays(arr) {
  const resp = DATES.map(({ time, days }) => ({
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
  console.log(resp);
  return resp;
}

export default function Calendar() {
  const [events, setEvents] = useState({ dates: DATES });

  useEffect(async () => {
    const req = await store.getAllEvents();
    const data = setEventsIntoDays(req);
    setEvents({ dates: data });

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
        {events?.dates?.map(({ time, days }) => (
          <TableRow key={time} time={time} events={days} />
        ))}
      </tbody>
    </Table>
  );
}
