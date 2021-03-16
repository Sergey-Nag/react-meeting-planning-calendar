import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { DAY, TIME } from '../../helpers/helpers';

export default function CreateEventForm() {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Name of the event:
        </Form.Label>
        <Col sm="9">
          <Form.Control placeholder="Type the name of the event" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Day:
        </Form.Label>
        <Col sm="9">
          <Form.Control as="select" custom>
            <option value="0">Select weekday</option>
            {DAY.map((day) => (
              <option key={day} value={day.slice(0, 3)}>
                {day}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Time:
        </Form.Label>
        <Col sm="9">
          <Form.Control as="select" custom>
            <option value="0">Select time</option>
            {TIME.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Participants:
        </Form.Label>
        <Col sm="9">
          <div className="w-100 d-flex flex-wrap participants">
            <h5 className="mt-2 text-warning">Choose participants</h5>
          </div>
        </Col>
      </Form.Group>
    </Form>
  );
}
