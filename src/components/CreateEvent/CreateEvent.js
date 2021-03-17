import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CreateEventForm from './CreateEventForm';
import ParticipantsSelects from './ParticipantsSelects';
import FormContext from '../../contexts/FormContext';
import Storage from '../../services/Storage';

const storeInstance = Storage.getInstance();

const prepareData = (data) =>
  Object.keys(data).reduce((acc, key) => {
    acc[key] = data[key].value;
    return acc;
  }, {});

export default function CreateEvent({ setTitle }) {
  const users = useSelector((state) => state.users);
  // const events = useSelector((state) => state.events);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const history = useHistory();
  const [form, setForm] = useState({
    validation: false,
    inputs: {
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
        value: [],
        isValid: true,
      },
    },
    participants: users.list.map((u) => ({ ...u, isChecked: false })),
  });

  useEffect(() => {
    document.title = 'Create Event';
    setTitle('Create Event');
  }, []);

  const createEvent = async (data) => {
    // const createReq = await store.setEvent(data);
    // console.log(createReq);
  };

  const handleCreateEvent = () => {
    const values = Object.values(form.inputs);
    const isAnyInvalid = values.some(({ isValid }) => isValid === false);

    setForm({ ...form, validation: isAnyInvalid });

    if (isAnyInvalid) return;

    const { day, time } = form.inputs;
    const isDateTimeBooked = storeInstance.getEventByDayTime(
      day.value,
      time.value,
    );

    if (isDateTimeBooked) {
      // createPopUp(alert, setAlert)('danger',
      // 'Failed to create an event. Time slot at Wed 10:00 is already booked');
      return;
    }

    createEvent(prepareData(form.inputs));

    setButtonDisabled(true);
    setTimeout(() => {
      history.push('/');
      // setEvents({
      //   ...events,
      //   count: events.count + 1,
      // });
    }, 3000);
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <FormContext.Provider value={[form, setForm]}>
      <Card bg="white" className="p-5">
        <Row>
          <Col md={8}>
            <h3>Form</h3>
            <CreateEventForm />
          </Col>
          <Col md={4}>
            <h3>Users</h3>
            <ParticipantsSelects />
          </Col>
        </Row>
      </Card>
      <Row className="pt-4">
        <Col xs="6" />
        <Col xs="3">
          <Button
            variant="outline-secondary"
            className="w-100"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Col>
        <Col xs="3">
          <Button
            variant="success"
            className="w-100"
            disabled={buttonDisabled}
            onClick={handleCreateEvent}
          >
            Create Event
          </Button>
        </Col>
      </Row>
    </FormContext.Provider>
  );
}
