import React, { useContext } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../Dropdown/Dropdown';
import UsersContext from '../../contexts/UsersContext';

export default function Controls() {
  const [users] = useContext(UsersContext);
  const { access } = users.authUser;

  return (
    <Row>
      <Switch>
        <Route exact path="/">
          <Col>
            <Dropdown users={users.list} />
          </Col>
          {access.createEvents && (
            <Col>
              <Link
                to="/create-event"
                className="w-100 btn btn-outline-primary"
              >
                Create event
              </Link>
            </Col>
          )}
        </Route>
        <Route exact path="/create-event">
          <Col />
          <Col>
            <Link to="/" className="btn btn-outline-secondary w-100">
              Back
            </Link>
          </Col>
        </Route>
      </Switch>
    </Row>
  );
}
