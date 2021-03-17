import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../Dropdown/Dropdown';
import AuthContext from '../../contexts/AuthContext';
import { useSelector } from 'react-redux';

export default function Controls() {
  const { access, list } = useSelector((state) => state.users);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    console.log(access);
    setLoaded(true);
  }, [list.length > 0]);
  
  return (
    <Row>
      <Switch>
        <Route exact path="/">
          <Col>
            {loaded && <Dropdown users={list} />}
          </Col>
          {loaded && access.createEvents && (
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
