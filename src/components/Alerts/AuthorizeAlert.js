import React, { useContext, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AuthContext from '../../contexts/AuthContext';
import Admin from '../../users/Admin';

export default function AuthorizeAlert() {
  const [, setAuthUser] = useContext(AuthContext);
  const users = useSelector((state) => state.users);
  const selectUsers = useRef(null);

  const authorizeUser = () => {
    const chosenUser = selectUsers.current.value;
    setAuthUser(users.list.find(({ name }) => name === chosenUser));
  };

  return (
    <div className="alert__wrapp">
      <div className="alert bg-light" style={{ width: '300px' }}>
        Please authorise
        <br />
        <Form.Control as="select" custom className="mt-2" ref={selectUsers}>
          {users.list.map((user) => (
            <option key={user.id} title={user instanceof Admin ? 'Admin' : ''}>
              {user.name}
            </option>
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
