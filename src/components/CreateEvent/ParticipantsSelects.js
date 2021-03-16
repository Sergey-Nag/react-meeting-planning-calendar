import React, { useContext } from 'react';
import ParticipantCheck from './ParticipantCheck';
import FormContext from '../../contexts/FormContext';

export default function ParticipantsSelects() {
  const [form] = useContext(FormContext);

  return (
    <div className="users__cover">
      <div className="users__wrapp">
        {form.participants.map((user) => (
          <ParticipantCheck key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
