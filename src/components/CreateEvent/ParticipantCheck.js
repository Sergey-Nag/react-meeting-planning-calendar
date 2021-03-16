import React, { useState } from 'react';
import { Form, Card, Col, Row } from 'react-bootstrap';
import { AVATARS } from '../../helpers/helpers';

export default function ParticipantCheck({ user: { name, avatar } }) {
  const [check, setCheck] = useState(false);

  return (
    <Card
      bg="white"
      className="user"
      data-name={name}
      onClick={() => setCheck(!check)}
    >
      <Row>
        <Col sm="3">
          <img
            src={AVATARS[avatar]}
            data-src={AVATARS[avatar]}
            alt={avatar}
            className="border rounded-circle w-100"
          />
        </Col>
        <Col sm="7" className="d-flex flex-column justify-content-center">
          <span>{name}</span>
        </Col>
        <Col sm="2" className="d-flex flex-column justify-content-center">
          <Form.Check custom readOnly type="checkbox" checked={check} />
        </Col>
      </Row>
    </Card>
  );
}
