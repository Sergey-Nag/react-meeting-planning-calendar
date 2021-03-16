import React from 'react';
import ParticipantCheck from './ParticipantCheck';

export default function ParticipantsSelects({ users }) {
  return (
    <div className="users__cover">
      <div className="users__wrapp">
        {users.map((user) => (
          <ParticipantCheck key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
