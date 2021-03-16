import React, { useContext, useEffect } from 'react';
import AlertContext from '../../contexts/AlertContext';

export default function PopUp() {
  const [alert, setAlert] = useContext(AlertContext);

  useEffect(() => {
    const popupsInterval = setInterval(() => {
      setAlert({
        ...alert,
        list: alert.list.slice(1, alert.length),
      });

      if (alert.list.length === 0) setAlert({ show: false });
    }, 3000);

    return () => clearInterval(popupsInterval);
  }, [alert.list.length]);

  return (
    <div className="popup__wrapp">
      {alert.list.map(({ id, num, theme, text }) => (
        <div key={id} className={`popup row alert alert-${theme} mb-3`}>
          <span className="popup__title">
            <b className="popup__num">{num}</b>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
