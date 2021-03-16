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
    const newParticipantsArr = form.participants.reduce(setParticipants, []);
    setForm({
      ...form,
      inputs: {
        ...form.inputs,
        participants: {
          isValid: newParticipantsArr.length > 0,
          value: newParticipantsArr,
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
