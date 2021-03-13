import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Card from '../Card/Card';
import Storage from '../../services/databaseApi';

const store = Storage.getInstance();

export default function Calendar() {
  const dates = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    times: [...Array(9)].map((el, i) => `1${i}:00`),
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const request = await store.getAllEvents();
        return request;
      } catch (e) {
        console.log(e);
        return [];
      }
    };

    setEvents(getEvents);
  }, []);

  const eventByTime = async (day, time) => {
    const ev = await events;
    return ev.find(({ data }) => data.day === day && data.time === time);
  };

  return (
    <Table bordered className="calendar">
      <thead className="calendar__head">
        <tr className="text-center">
          <th>Time</th>
          {dates.days.map((head) => (
            <th key={head} className="calendar__col">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="calendar__body">
        {dates.times.map((time) => (
          <tr key={time}>
            <th key="i">{time}</th>
            {dates.days.map((day) => (
              <td key={`${day}-${time}`} data-day={day} data-time={time} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
