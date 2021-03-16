import React, { useContext, useEffect } from 'react';
import ParticipantCheck from './ParticipantCheck';
import FormContext from '../../contexts/FormContext';

const setParticipants = (acc, item) => {
  if (item.isChecked) acc.push(item.name);
  return acc;
};

export default function ParticipantsSelects() {
  const [form, setForm] = useContext(FormContext);
  useEffect(() => {
    setForm({
      ...form,
      inputs: {
        ...form.inputs,
        participants: {
          ...form.inputs.participants,
          value: form.participants.reduce(setParticipants, []),
        },
      },
    });
  }, [form.participants.filter(({ isChecked }) => isChecked).length]);

  return (
    <div className="users__cover">
      <div className="users__wrapp">
        {form.participants.map((user) => (
          <ParticipantCheck
            key={user.id}
            user={user}
            form={form}
            check={user.isChecked}
            setForm={setForm}
          />
        ))}
      </div>
    </div>
  );
}
