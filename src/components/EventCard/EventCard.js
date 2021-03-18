import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../contexts/AuthContext';
import { AVATARS } from '../../helpers/helpers';
import { removeEvent } from '../../reduxStore/actions/eventsActions';
import { SHOW_CONFIRM } from '../../reduxStore/types/alertsTypes';

export default function EventCard({ id, event }) {
  const { title, participants } = event;
  const dispatch = useDispatch();
  const [{ access }] = useContext(AuthContext);
  const users = useSelector((state) => state.users);
  const [participantsList, setParticipantsList] = useState([]);

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

  useEffect(() => {
    setParticipantsList(
      participants.map((pName) =>
        users.list.find(({ name }) => name === pName)),
    );
  }, [participantsList.length]);

  return (
    <div className="card calendar__card d-flex justify-content-between">
      <div className="card__title">
        <span>{title}</span>
      </div>
      <div className="card__avatars">
        {participantsList.map(({ name, avatar }) => (
          <img
            key={name}
            src={AVATARS[avatar]}
            title={name}
            alt={name}
            className="card__avatar"
          />
        ))}
      </div>
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
