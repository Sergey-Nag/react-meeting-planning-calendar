import React, { useContext } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../Dropdown/Dropdown';
import AuthContext from '../../contexts/authContext';

export default function Controls(args) {
  const [isAdmin] = useContext(AuthContext);

  return (
    <Row>
      <Switch>
        <Route exact path="/">
          <Col>
            <Dropdown users={args.users} />
          </Col>
          {isAdmin && (
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