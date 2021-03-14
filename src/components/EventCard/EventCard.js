import React, { useContext } from 'react';
import AlertContext from '../../contexts/AlertContext';
import UsersContext from '../../contexts/UsersContext';
import Storage from '../../services/Storage';

const store = Storage.getInstance();

export default function EventCard({ id, title }) {
  const [
    {
      authUser: { access },
    },
  ] = useContext(UsersContext);
  const [, setAlert] = useContext(AlertContext);

  const showDeleteConfirm = () => {
    setAlert({
      show: true,
      text: `Are you sure you want to delete "${title}" event?`,
      onConfirm: async () => store.removeEvent(id),
      onDeny: () => console.log('not removed'),
    });
  };

  return (
    <div
      className="card calendar__card d-flex justify-content-between"
      data-id={id}
    >
      <div className="card__title">
        <span>{title}</span>
      </div>
      <div className="card__avatars" />
      {access.deleteEvents && (
        <button
          type="button"
          className="card__btn card__btn_close"
          onClick={showDeleteConfirm}
        />
      )}
    </div>
  );
}
