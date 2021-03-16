import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import { DAY } from '../../helpers/helpers';
import EventsContext from '../../contexts/EventsContext';

export default function Calendar({ setAlert }) {
  const [events] = useContext(EventsContext);

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
        {events.list.map(({ time, days }) => (
          <TableRow key={time} time={time} events={days} setAlert={setAlert} />
        ))}
      </tbody>
    </Table>
  );
}
