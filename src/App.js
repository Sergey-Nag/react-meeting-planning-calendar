import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Controls from './components/Controls/Controls';
import Calendar from './components/Calendar/Calendar';
import Form from './components/Form/Form';
import AuthorizeAlert from './components/Alerts/AuthorizeAlert';
import ConfirmAlert from './components/Alerts/ConfirmAlert';
import UsersContext from './contexts/UsersContext';
import EventsContext from './contexts/EventsContext';
import AlertContext from './contexts/AlertContext';
import Store from './services/Storage';
import createUser from './users/createUser';
import Admin from './users/Admin';
import { setEventsIntoDays } from './helpers/helpers';
import PopUp from './components/Alerts/PopUp';

const store = Store.getInstance();

function applyUsers(users) {
  return users.map(createUser);
}

export default function App() {
  const [users, setUsers] = useState({ list: [], authUser: null });
  const [events, setEvents] = useState({ list: [], count: 0 });
  const [alert, setAlert] = useState({ show: false });

  useEffect(async () => {
    const reqUsers = await store.getAllUsers();
    setUsers({
      ...users,
      ...{
        list: applyUsers(reqUsers),
      },
    });
  }, []);

  useEffect(async () => {
    const req = await store.getPreFilteredEvents();
    const data = setEventsIntoDays(req);
    setEvents({
      ...events,
      ...{
        list: data,
      },
    });
  }, [events.count]);

  const isAdmin = () => users.authUser instanceof Admin;

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <EventsContext.Provider value={[events, setEvents]}>
        <AlertContext.Provider value={[alert, setAlert]}>
          <Router>
            {alert.show && alert.type === 'popup' && <PopUp />}
            {alert.show && alert.type === 'confirm' && <ConfirmAlert />}
            {users.authUser === null && <AuthorizeAlert />}
            <Container className="pt-5">
              <Row>
                <Col>
                  <h1>Calendar</h1>
                </Col>
                <Col className="pt-1">
                  {users.authUser !== null && (
                    <Controls isAdmin={isAdmin()} users={users.list} />
                  )}
                </Col>
              </Row>
              <Row className="pt-2">
                <Col>
                  <Route exact path="/">
                    <Calendar
                      isAdmin={isAdmin()}
                      users={users.list}
                    />
                  </Route>
                  <Route exact path="/create-event">
                    <Form />
                  </Route>
                </Col>
              </Row>
            </Container>
          </Router>
        </AlertContext.Provider>
      </EventsContext.Provider>
    </UsersContext.Provider>
  );
}
