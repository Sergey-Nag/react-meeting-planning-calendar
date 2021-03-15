import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Time:
        </Form.Label>
        <Col sm="9">
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
}
