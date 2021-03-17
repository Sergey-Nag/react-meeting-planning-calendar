import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
// import Store from './services/Storage';
import createUser from './users/createUser';
import { createPopUp, setEventsIntoDays } from './helpers/helpers';
import PopUp from './components/Alerts/PopUp';
// import NotifyResponse from './services/SrotageDecorator';
 import { setUsers } from './helpers/actions';

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
    dispatch(setUsers());
    console.log(users);
    setTitle('TEST');
  }, []);
  
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
    <div className="p-5">
      <h1>{title}</h1>
      { users.isLoading && (<h2>loading...</h2>) }
      { users.error !== null && (<h2 style={{color: 'red'}}>{users.error}</h2>) }
      { !users.isLoading && list.map((user) => (<h2 key={user.id}>{user.data.name}</h2>)) }
    </div>
  );
//    <>
//      {alert.show && alert.type === 'popup' && <PopUp />}
//      {alert.show && alert.type === 'confirm' && <ConfirmAlert />}
//      {users.authUser === null && <AuthorizeAlert />}
//      <Router basename={process.env.PUBLIC_URL} >
//        <Container className="pt-5">
//          <Row>
//            <Col>
//              <h1>{title}</h1>
//            </Col>
//            <Col className="pt-1">
//              {users.authUser !== null && <Controls users={users.list} />}
//            </Col>
//          </Row>
//          <Row className="pt-2">
//            <Col>
//              <Switch>
//                <Route exact path="/">
//                  <Calendar setTitle={setTitle} />
//                </Route>
//                <Route path="/create-event">
//                  {users.authUser !== null &&
//                    users.authUser.access.createEvents && <CreateEvent setTitle={setTitle} />}
//                  {users.authUser !== null &&
//                    !users.authUser.access.createEvents && (
//                      <Redirect to="/" />
//                  )}
//                </Route>
//                <Route path="*">
//                  <PageNotFound setTitle={setTitle} />
//                </Route>
//              </Switch>
//            </Col>
//          </Row>
//        </Container>

//    </>
//  );
}
