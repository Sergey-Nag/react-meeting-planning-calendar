import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function FormInput({
  type,
  title,
  fieldName,
  placeholder,
  data,
  inputArr,
  handleChange,
}) {
  const { value, isValid, tip } = data;

  if (type === 'text') {
    return (
      <Form.Group as={Row}>
        <Form.Label column sm="3" htmlFor={fieldName}>
          {title}
        </Form.Label>
        <Col sm="9">
          <Form.Control
            placeholder={placeholder}
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleChange}
            isInvalid={value !== '' && !isValid}
          />

          <Form.Control.Feedback type="invalid">
            {!isValid &&
              tip.split('\n').map((msg) => <div key={msg}>{msg}</div>)}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
    );
  } else if (type === 'select') {
    return (
      <Form.Group as={Row}>
        <Form.Label column sm="3" htmlFor={fieldName}>
          {title}
        </Form.Label>
        <Col sm="9">
          <Form.Control
            custom
            as="select"
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={handleChange}
            isInvalid={value !== '' && !isValid}
          >
            <option value="0">{placeholder}</option>
            {inputArr.map(([val, item]) => (
              <option key={item} value={val}>
                {item}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
    );
  }
}
