import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../Dropdown/Dropdown';
import AuthContext from '../../contexts/AuthContext';

export default function Controls() {
  const [{ access }] = useContext(AuthContext);
  const users = useSelector((state) => state.users);

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
