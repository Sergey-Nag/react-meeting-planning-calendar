import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AlertContext from '../../contexts/AlertContext';

export default function ConfirmAlert() {
  const [alert, setAlert] = useContext(AlertContext);

  const denyHandler = () => {
    alert?.onDeny();
    setAlert({ show: false });
  };
  const confirmHandler = () => {
    alert?.onConfirm();
    setAlert({ show: false });
  };

  return (
    <div className="alert__wrapp">
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
