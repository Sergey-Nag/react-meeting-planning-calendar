import React, { useContext, useEffect, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AlertContext from '../../contexts/AlertContext';

export default function ConfirmAlert() {
  const [alert, setAlert] = useContext(AlertContext);
  const wrapper = useRef();

  const denyHandler = () => {
    if (alert.onDeny) alert.onDeny();
    setAlert({ show: false });
  };
  const confirmHandler = () => {
    if (alert.onConfirm) alert.onConfirm();
    setAlert({ show: false });
  };

  useEffect(() => {
    const wrapp = wrapper.current;
    const clickAsideHandler = (e) => {
      if (e.target.className === 'alert__wrapp') denyHandler();
    };

    wrapp.addEventListener('click', clickAsideHandler);

    return () => {
      wrapp.removeEventListener('click', clickAsideHandler);
    };
  }, []);

  return (
    <div className="alert__wrapp" ref={wrapper}>
      <div className="alert bg-light">
        {alert.text}
        <br />
        <hr />
        <Row>
          <Col>
            <Button
              variant="outline-danger"
              type="button"
              className="w-100"
              onClick={denyHandler}
            >
              No
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              type="button"
              className="w-100"
              onClick={confirmHandler}
            >
              Yes
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
