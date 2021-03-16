import React, { useContext } from 'react';
import FormContext from '../../contexts/FormContext';
import { AVATARS } from '../../helpers/helpers';

export default function Participant({ name, avatar }) {
  const [form, setForm] = useContext(FormContext);

  const removeMe = () => {
    setForm({
      ...form,
      participants: form.participants.map((p) => (
        p.name === name ? { ...p, isChecked: false } : p
      )),
    });
  };

  return (
    <div className="participant">
      <img src={AVATARS[avatar]} className="participant__avatar" alt={name} />
      <span className="participant__name">{name}</span>
      <input type="hidden" value={name} name="participants" />
      <button
        type="button"
        className="btn-close participant__btn-remove"
        onClick={removeMe}
      />
    </div>
  );
}
