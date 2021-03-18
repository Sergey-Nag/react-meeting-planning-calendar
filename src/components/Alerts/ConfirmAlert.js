import React, { useEffect, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_CONFIRM } from '../../reduxStore/types/alertsTypes';

const closeAlert = {
  type: HIDE_CONFIRM,
};

export default function ConfirmAlert() {
  const { data } = useSelector((state) => state.alerts);
  const displatch = useDispatch();
  const wrapper = useRef();

  const denyHandler = () => {
    displatch(closeAlert);
    if (data.onDeny) data.onDeny();
  };

  const confirmHandler = () => {
    displatch(closeAlert);
    if (data.onConfirm) data.onConfirm();
  };

  useEffect(() => {
    const backdrop = wrapper.current;
    const clickAsideHandler = (e) => {
      if (e.target.className === 'alert__wrapp') denyHandler();
    };

    backdrop.addEventListener('click', clickAsideHandler);

    return () => backdrop.removeEventListener('click', clickAsideHandler);
  }, []);

  return (
    <div className="alert__wrapp" ref={wrapper}>
      <div className="alert bg-light">
        {data.text}
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
