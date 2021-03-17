import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import { DAY, setEventsIntoDays } from '../../helpers/helpers';
import loadEvents from '../../reduxStore/actions/eventsActions';

export default function Calendar({ setTitle }) {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEvents());
  }, [events.shouldReload]);

  useEffect(() => {
    document.title = 'Calendar';
    setTitle('Calendar');
  }, []);

  return (
    <Table bordered className="calendar">
      <thead className="calendar__head">
        <tr className="text-center">
          <th>Time</th>
          {DAY.map((day) => (
            <th key={day} className="calendar__col">
              {day.slice(0, 3)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="calendar__body">
        {!events.isLoading && setEventsIntoDays(events.list).map(({ time, days }) => (
          <TableRow key={time} time={time} events={days} />
        ))}
      </tbody>
    </Table>
  );
}
