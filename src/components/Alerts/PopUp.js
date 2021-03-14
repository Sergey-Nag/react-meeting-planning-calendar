import React, { useContext, useEffect } from 'react';
import AlertContext from '../../contexts/AlertContext';

export default function PopUp() {
  const [alert, setAlert] = useContext(AlertContext);

  useEffect(() => {
    const popupsInterval = setInterval(() => {
      const index = alert.list.findIndex(
        ({ created }) => created < Date.now() - 3000,
      );

      if (index !== -1) {
        alert.list.splice(index, 1);
      }

      if (alert.list.length === 0) setAlert({ show: false });
    }, 3000);

    return () => clearInterval(popupsInterval);
  }, []);

  return (
    <div className="popup__wrapp">
      {alert.list.map(({ created, theme, text }) => (
        <div key={created} className={`popup row alert alert-${theme} mb-3`}>
          <span className="popup__title">{text}</span>
        </div>
      ))}
    </div>
  );
}
