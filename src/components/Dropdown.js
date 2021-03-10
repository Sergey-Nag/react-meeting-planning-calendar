import { Form } from 'react-bootstrap';

export default function Dropdown(users) {
  console.log(Array.isArray(users));

  return (
    <Form.Control as="select" custom defaultValue="0">
      <option value="0">All members</option>
      { users.users.map(({ name }, i) => (
        <option key={i} value={name}>{name}</option>
      )) }
    </Form.Control>
  );
}