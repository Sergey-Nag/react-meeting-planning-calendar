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
import AuthContext from './contexts/AuthContext';
import PopUp from './components/Alerts/PopUp';
import loadUsers from './reduxStore/actions/usersActions';

export default function App() {
  const users = useSelector((state) => state.users);
  const confirm = useSelector((state) => state.alerts.confirm);
  const popups = useSelector((state) => state.alerts.popups);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {popups.isShow && <PopUp />}
      {confirm.isShow && <ConfirmAlert />}
      {authUser === null && <AuthorizeAlert />}
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="pt-5">
          <Row>
            <Col>
              <h1>{title}</h1>
            </Col>
            <Col className="pt-1">
              {authUser !== null && <Controls users={users.list} />}
            </Col>
          </Row>
          <Row className="pt-2">
            <Col>
              <Switch>
                <Route exact path="/">
                  <Calendar setTitle={setTitle} />
                </Route>
                <Route path="/create-event">
                  {authUser !== null && authUser.access.createEvents && (
                    <CreateEvent setTitle={setTitle} />
                  )}
                  {authUser !== null && !authUser.access.createEvents && (
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
    </AuthContext.Provider>
  );
}
