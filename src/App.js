import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Controls from './components/Controls/Controls';
import Calendar from './components/Calendar/Calendar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CreateEvent from './components/CreateEvent/CreateEvent';
import AuthorizeAlert from './components/Alerts/AuthorizeAlert';
import ConfirmAlert from './components/Alerts/ConfirmAlert';
import UsersContext from './contexts/UsersContext';
import EventsContext from './contexts/EventsContext';
import AlertContext from './contexts/AlertContext';
import Store from './services/Storage';
import createUser from './users/createUser';
import { createPopUp, setEventsIntoDays } from './helpers/helpers';
import PopUp from './components/Alerts/PopUp';
import NotifyResponse from './services/SrotageDecorator';

const storeInstance = Store.getInstance();

function applyUsers(users) {
  return users.map(createUser);
}

export default function App() {
  const [users, setUsers] = useState({ list: [], authUser: null });
  const [events, setEvents] = useState({ list: [], count: 0 });
  const [alert, setAlert] = useState({ show: false });
  const [title, setTitle] = useState('');
  const store = new NotifyResponse(storeInstance, createPopUp(alert, setAlert));

  useEffect(async () => {
    const reqUsers = await store.getAllUsers();
    setUsers({
      ...users,
      list: applyUsers(reqUsers),
    });
  }, []);

  useEffect(async () => {
    const req = await store.getPreFilteredEvents();
    const data = setEventsIntoDays(req);
    setEvents({
      ...events,
      list: data,
    });
  }, [events.count]);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <EventsContext.Provider value={[events, setEvents]}>
        <AlertContext.Provider value={[alert, setAlert]}>
          {alert.show && alert.type === 'popup' && <PopUp />}
          {alert.show && alert.type === 'confirm' && <ConfirmAlert />}
          {users.authUser === null && <AuthorizeAlert />}
          <Router basename={process.env.PUBLIC_URL}>
            <Container className="pt-5">
              <Row>
                <Col>
                  <h1>{title}</h1>
                </Col>
                <Col className="pt-1">
                  {users.authUser !== null && <Controls users={users.list} />}
                </Col>
              </Row>
              <Row className="pt-2">
                <Col>
                  <Switch>
                    <Route exact path="/">
                      <Calendar setTitle={setTitle} />
                    </Route>
                    <Route path="/create-event">
                      {users.authUser !== null &&
                        users.authUser.access.createEvents && <CreateEvent setTitle={setTitle} />}
                      {users.authUser !== null &&
                        !users.authUser.access.createEvents && (
                          <Redirect to="/" />
                      )}
                    </Route>
                    <Route path="*">
                      <PageNotFound setTitle={setTitle} />
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
          </Router>
        </AlertContext.Provider>
      </EventsContext.Provider>
    </UsersContext.Provider>
  );
}
