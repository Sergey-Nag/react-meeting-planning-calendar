import React from 'react';
import { AVATARS } from '../../helpers/helpers';

export default function Participant({ name, avatar }) {
  return (
    <div className="participant">
      <img src={AVATARS[avatar]} className="participant__avatar" alt={name} />
      <span className="participant__name">{name}</span>
      <input type="hidden" value={name} name="participants" />
      <button type="button" className="btn-close participant__btn-remove" />
    </div>
  );
}
