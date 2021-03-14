import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Controls from './components/Controls/Controls';
import Calendar from './components/Calendar/Calendar';
import Form from './components/Form/Form';
import AuthorizeAlert from './components/Alerts/AuthorizeAlert';
import UsersContext from './contexts/UsersContext';
import Store from './services/databaseApi';
import createUser from './users/createUser';
import Admin from './users/Admin';

const store = Store.getInstance();

function applyUsers(users) {
  return users.map(createUser);
}

function App() {
  const [users, setUsers] = useState({ list: [], authUser: null });

  useEffect(async () => {
    const reqUsers = await store.getAllUsers();
    setUsers({
      ...users,
      ...{
        list: applyUsers(reqUsers),
      },
    });
  }, []);

  const isAdmin = () => users.authUser instanceof Admin;

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <Router>
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
                <Calendar isAdmin={isAdmin()} users={users.list} />
              </Route>
              <Route exact path="/create-event">
                <Form />
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </UsersContext.Provider>
  );
}

export default App;
