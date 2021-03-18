import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import { DAY, setEventsIntoDays } from '../../helpers/helpers';
import {
  filterByParticipants,
  loadEvents,
} from '../../reduxStore/actions/eventsActions';
import { showPopup } from '../../reduxStore/actions/alertActions';
import AuthContext from '../../contexts/AuthContext';

export default function Calendar({ setTitle }) {
  const [authUser] = useContext(AuthContext);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEvents());
  }, [events.shouldReload]);

  useEffect(() => {
    document.title = 'Calendar';
    setTitle('Calendar');
  }, []);

  useEffect(() => {
    if (authUser && !authUser.access.filterEvents) {
      dispatch(filterByParticipants(authUser.name));
      dispatch(showPopup('success', `Displayed events for ${authUser.name}`));
    }
  }, [authUser !== null]);

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
        {setEventsIntoDays(events.list).map(({ time, days }) => (
          <TableRow key={time} time={time} events={days} />
        ))}
      </tbody>
    </Table>
  );
}
