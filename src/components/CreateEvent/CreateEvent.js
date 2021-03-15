import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CreateEventForm from './CreateEventForm';
import ParticipantsSelects from './ParticipantsSelects';

export default function CreateEvent() {
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
            <ParticipantsSelects />
          </Col>
        </Row>
      </Card>
      <Row className="pt-4" />
    </>
  );
}
