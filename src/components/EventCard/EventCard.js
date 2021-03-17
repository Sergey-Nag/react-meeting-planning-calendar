import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertContext from '../../contexts/AlertContext';
import AuthContext from '../../contexts/AuthContext';
import Storage from '../../services/Storage';
import NotifyResponse from '../../services/SrotageDecorator';
import { createPopUp } from '../../helpers/helpers';
import loadEvents from '../../reduxStore/actions/eventsActions';

const storeInstance = Storage.getInstance();

export default function EventCard({ id, title }) {
  // const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [{ access }] = useContext(AuthContext);
  // const [alert, setAlert] = useContext(AlertContext);
  // const store = new NotifyResponse(storeInstance, createPopUp(alert, setAlert));

  const showDeleteConfirm = () => {};
  //   setAlert({
  //     show: true,
  //     type: 'confirm',
  //     text: `Are you sure you want to delete "${title}" event?`,
  //     onConfirm: async () => {
  //       const isRemoved = await store.removeEvent(id);
  //       if (isRemoved) {
  //         dispatch(loadEvents());
  //       }
  //     },
  //   });
  // };

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
