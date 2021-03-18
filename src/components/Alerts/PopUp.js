import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FIRST_POPUP, REMOVE_POPUPS } from '../../reduxStore/types/alertsTypes';

export default function PopUp() {
  const { data } = useSelector((state) => state.alerts.popups);
  const dispatch = useDispatch();

  useEffect(() => {
    const popupsInterval = setInterval(() => {
      dispatch({
        type: REMOVE_FIRST_POPUP,
      });

      if (data.length === 0) {
        dispatch({
          type: REMOVE_POPUPS,
        });
      }
    }, 3000);

    return () => clearInterval(popupsInterval);
  }, [data.length]);

  return (
    <div className="popup__wrapp">
      {data.map(({ num, theme, text }) => (
        <div key={`popup-${num}`} className={`popup row alert alert-${theme} mb-3`}>
          <span className="popup__title">
            <b className="popup__num">{num}</b>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
