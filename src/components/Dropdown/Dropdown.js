import React from 'react';
import { Form } from 'react-bootstrap';

export default function Dropdown(users) {
  return (
    <Form.Control as="select" custom defaultValue="0">
      <option value="0">All members</option>
      {users.users.map(({ name }) => (
        <option key={`user-${name}`} value={name}>
          {name}
        </option>
      ))}
    </Form.Control>
  );
}
