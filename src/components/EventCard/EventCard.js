import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import AuthContext from '../../contexts/AuthContext';
import { removeEvent } from '../../reduxStore/actions/eventsActions';
import { SHOW_CONFIRM } from '../../reduxStore/types/alertsTypes';

export default function EventCard({ id, title }) {
  const dispatch = useDispatch();
  const [{ access }] = useContext(AuthContext);

  const showDeleteConfirm = () => {
    dispatch({
      type: SHOW_CONFIRM,
      payload: {
        text: `Are you sure you want to delete "${title}" event?`,
        onConfirm: () => {
          dispatch(removeEvent(id));
        },
      },
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
