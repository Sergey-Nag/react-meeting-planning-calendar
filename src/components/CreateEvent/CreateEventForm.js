import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { DAY, TIME } from '../../helpers/helpers';
import FormInput from './FormInput';

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
  const [formData, setFormData] = useState({
    title: {
      value: '',
      isValid: null,
      tip: '',
    },
    day: {
      value: '',
      isValid: null,
    },
    time: {
      value: '',
      isValid: null,
    },
    participants: {
      value: '',
      isValid: null,
    },
  });

  const validateValues = (name, value) => {
    if (name === 'title') return validateTextValue(value);
    else if (name === 'participants') return { isValid: null };
    else return { isValid: value !== '0' };
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: {
        value,
        ...validateValues(name, value),
      },
    });
  };

  return (
    <Form>
      <FormInput
        type="text"
        title="Name of the event"
        placeholder="Type the name of the event:"
        fieldName="title"
        data={formData.title}
        handleChange={handleChange}
      />

      <FormInput
        type="select"
        title="Day:"
        placeholder="Select weekday"
        fieldName="day"
        data={formData.day}
        handleChange={handleChange}
        inputArr={DAY.map((day) => [day.slice(0, 3), day])}
      />

      <FormInput
        type="select"
        title="Time:"
        placeholder="Select weekday"
        fieldName="time"
        data={formData.time}
        handleChange={handleChange}
        inputArr={TIME.map((time) => [time, time])}
      />

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
