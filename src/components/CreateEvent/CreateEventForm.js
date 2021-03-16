import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { DAY, TIME } from '../../helpers/helpers';
import FormInput from './FormInput';
import FormContext from '../../contexts/FormContext';

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
  const [form, setForm] = useContext(FormContext);

  const validateValues = (name, value) => {
    if (name === 'title') return validateTextValue(value);
    else if (name === 'participants') return { isValid: value.lenght > 0 };
    else return { isValid: value !== '0' };
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      inputs: {
        ...form.inputs,
        [name]: {
          value,
          ...validateValues(name, value),
        },
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
        data={form.inputs.title}
        handleChange={handleChange}
        validation={form.validation}
      />

      <FormInput
        type="select"
        title="Day:"
        placeholder="Select weekday"
        fieldName="day"
        data={form.inputs.day}
        handleChange={handleChange}
        inputArr={DAY.map((day) => [day.slice(0, 3), day])}
        validation={form.validation}
      />

      <FormInput
        type="select"
        title="Time:"
        placeholder="Select weekday"
        fieldName="time"
        data={form.inputs.time}
        handleChange={handleChange}
        inputArr={TIME.map((time) => [time, time])}
        validation={form.validation}
      />

      <FormInput
        type="participants"
        title="Participants:"
        placeholder="Choose participants -->"
        data={form.inputs.participants}
        handleChange={handleChange}
        inputArr={form.participants.map((el) => el.isChecked && el)}
        validation={form.validation}
      />
    </Form>
  );
}
