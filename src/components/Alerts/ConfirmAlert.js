import React, { useContext, useEffect, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AlertContext from '../../contexts/AlertContext';

export default function ConfirmAlert() {
  const [alert, setAlert] = useContext(AlertContext);
  const wrapper = useRef();

  const denyHandler = () => {
    setAlert({ show: false });
    if (alert.onDeny) alert.onDeny();
  };
  const confirmHandler = () => {
    setAlert({ show: false });
    if (alert.onConfirm) alert.onConfirm();
  };

  useEffect(() => {
    const backdrop = wrapper.current;
    const clickAsideHandler = (e) => {
      console.log(e.target === backdrop);
      if (e.target.className === 'alert__wrapp') denyHandler();
    };

    backdrop.addEventListener('click', clickAsideHandler);

    return () => backdrop.removeEventListener('click', clickAsideHandler);
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
