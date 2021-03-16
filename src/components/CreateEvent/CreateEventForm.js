import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { DAY, TIME } from '../../helpers/helpers';

function validateTextValue(value) {
  const res = {
    isValid: true,
    tip: '',
  };

  if (value.length < 3) {
    res.isValid = false;
    res.tip = 'Length of title must be longer than 2 symbols\n';
  } else if (value.length > 40) {
    res.isValid = false;
    res.tip = "Length of title mustn't be longer than 40 symbols\n";
  }

  if (/\*|`|%|\$|;|:|\/|\\/.test(value)) {
    res.isValid = false;
    res.tip += "Title mustn't consist symbols like '*, `, %, $, ;, :, \\, /'";
  }

  return res;
}

export default function CreateEventForm() {
  const [validate, setValidate] = useState({
    title: null,
    day: null,
    time: null,
    participants: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { target } = e;

    switch (target.name) {
      case 'title':
        setValidate({
          ...validate,
          [target.name]: validateTextValue(target.value),
        });
        break;
      case 'day':
      case 'time':
        setValidate({
          ...validate,
          [target.name]: target.value !== '0',
        });
        break;
      default:
        break;
    }
  };

  return (
    <Form onChange={handleChange}>
      <Form.Group as={Row}>
        <Form.Label column sm="3" htmlFor="title">
          Name of the event:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            placeholder="Type the name of the event"
            id="title"
            name="title"
            isInvalid={validate.title !== null && !validate.title.isValid}
          />
          {validate.title !== null && (
            <Form.Control.Feedback type="invalid">
              {validate.title.tip}
            </Form.Control.Feedback>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3" htmlFor="day">
          Day:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            custom
            as="select"
            id="day"
            name="day"
            isInvalid={validate.day !== null && !validate.day}
          >
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
        <Form.Label column sm="3" htmlFor="time">
          Time:
        </Form.Label>
        <Col sm="9">
          <Form.Control as="select" custom id="time" name="time">
            <option value="0">Select time</option>
            {TIME.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3" htmlFor="participants">
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
