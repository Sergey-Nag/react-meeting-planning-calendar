import React, { useContext, useRef } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import AuthContext from '../../contexts/authContext';
// import { useEffect, useState } from "react";

export default function AuthorizeAlert({ users }) {
  const [, setAdmin] = useContext(AuthContext);
  const selectUsers = useRef(null);

  const authorizeUser = (e) => {
    const chosenUser = selectUsers.current.value;
    const isUserAdmin = users.find(({ name }) => name === chosenUser).isAdmin;
    setAdmin(isUserAdmin);
  };

  return (
    <div className="alert__wrapp">
      <div className="alert bg-light" style={{ width: '300px' }}>
        Please authorise
        <br />
        <Form.Control as="select" custom className="mt-2" ref={selectUsers}>
          {users.map(({ name }) => (
            <option key={`user-${name}`}>{name}</option>
          ))}
        </Form.Control>
        <hr />
        <Row>
          <Col>
            <Button
              variant="success"
              type="button"
              className="w-100"
              onClick={authorizeUser}
            >
              Confirm
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
