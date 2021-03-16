import React, { useCallback } from 'react';
import { Form, Card, Col, Row } from 'react-bootstrap';
import { AVATARS } from '../../helpers/helpers';

export default function ParticipantCheck({
  user: { name, avatar },
  check,
  form,
  setForm,
}) {
  const setCheck = useCallback((val) => {
    setForm({
      ...form,
      participants: form.participants.map((p) => (
        p.name === name ? { ...p, isChecked: val } : p
      )),
    });
  });

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
