import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Controls from './components/Controls/Controls';
//import Calendar from './components/Calendar/Calendar';
//import PageNotFound from './components/PageNotFound/PageNotFound';
//import CreateEvent from './components/CreateEvent/CreateEvent';
import AuthorizeAlert from './components/Alerts/AuthorizeAlert';
//import ConfirmAlert from './components/Alerts/ConfirmAlert';
import AuthContext from './contexts/AuthContext';
//import EventsContext from './contexts/EventsContext';
//import AlertContext from './contexts/AlertContext';
// import Store from './services/Storage';
import createUser from './users/createUser';
import { createPopUp, setEventsIntoDays } from './helpers/helpers';
import PopUp from './components/Alerts/PopUp';
// import NotifyResponse from './services/SrotageDecorator';
 import { loadUsers } from './reduxStore/actions';

// const storageInstance = Store.getInstance();

function applyUsers(users) {
  return users.map(createUser);
}

export default function App() {
  const users = useSelector((state) => state.users);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  //  const [events, setEvents] = useState({ list: [], count: 0 });
  //  const [alert, setAlert] = useState({ show: false });
  //  const db = new NotifyResponse(storageInstance, createPopUp(alert, setAlert));

  useEffect(() => {
    dispatch(loadUsers());
  }, [users.list.length > 0]);
  
  useEffect(() => {
    setList(users.list);
  }, [users.isLoading]);
  //
  //  useEffect(async () => {
  //    const req = await db.getPreFilteredEvents();
  //    const data = setEventsIntoDays(req);
  //    setEvents({
  //      ...events,
  //      list: data,
  //    });
  //  }, [events.count]);

  return (
    <>
      {alert.show && alert.type === 'popup' && <PopUp />}
      {alert.show && alert.type === 'confirm' && <ConfirmAlert />}
      {users.authUser === null && !users.isLoading && <AuthorizeAlert />}
      <Router basename={process.env.PUBLIC_URL} >
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
              
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}
