import React, { useContext, useRef } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import UsersContext from '../../contexts/UsersContext';

export default function AuthorizeAlert() {
  const [users, setUsers] = useContext(UsersContext);
  const selectUsers = useRef(null);

  const authorizeUser = (e) => {
    const chosenUser = selectUsers.current.value;
    setUsers({
      ...users,
      ...{
        authUser: users.list.find(({ name }) => name === chosenUser),
      },
    });
  };

  return (
    <div className="alert__wrapp">
      <div className="alert bg-light" style={{ width: '300px' }}>
        Please authorise
        <br />
        <Form.Control as="select" custom className="mt-2" ref={selectUsers}>
          {users.list.map(({ id, name }) => (
            <option key={id}>{name}</option>
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
