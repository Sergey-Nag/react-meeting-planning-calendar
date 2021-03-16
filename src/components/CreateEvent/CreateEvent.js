import React, { useEffect, useContext, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CreateEventForm from './CreateEventForm';
import ParticipantsSelects from './ParticipantsSelects';
import UsersContext from '../../contexts/UsersContext';
import FormContext from '../../contexts/FormContext';

export default function CreateEvent({ setTitle }) {
  const [users] = useContext(UsersContext);
  const [form, setForm] = useState({
    inputs: {},
    participants: users.list.map((u) => ({ ...u, isCheked: false })),
  });

  useEffect(() => {
    document.title = 'Create Event';
    setTitle('Create Event');
  }, []);

  return (
    <FormContext.Provider value={[form, setForm]}>
      <Card bg="white" className="p-5">
        <Row>
          <Col md={8}>
            <h3>Form</h3>
            <CreateEventForm />
          </Col>
          <Col md={4}>
            <h3>Users</h3>
            <ParticipantsSelects />
          </Col>
        </Row>
      </Card>
      <Row className="pt-4">
        <Col xs="6" />
        <Col xs="3">
          <Button variant="outline-secondary" className="w-100">
            Cancel
          </Button>
        </Col>
        <Col xs="3">
          <Button variant="primary" className="w-100">
            Submit
          </Button>
        </Col>
      </Row>
    </FormContext.Provider>
  );
}
