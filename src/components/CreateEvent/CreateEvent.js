import React, { useEffect, useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CreateEventForm from './CreateEventForm';
import ParticipantsSelects from './ParticipantsSelects';
import UsersContext from '../../contexts/UsersContext';

export default function CreateEvent() {
  const [users] = useContext(UsersContext);
  useEffect(() => {
    document.title = 'Create form';
  }, []);

  return (
    <>
      <Card bg="white" className="p-5">
        <Row>
          <Col md={8}>
            <h3>Form</h3>
            <CreateEventForm />
          </Col>
          <Col md={4}>
            <h3>Users</h3>
            <ParticipantsSelects users={users.list} />
          </Col>
        </Row>
      </Card>
      <Row className="pt-4" />
    </>
  );
}
