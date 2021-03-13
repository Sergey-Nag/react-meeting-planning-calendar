import React from 'react';

export default function Card({ id, title }) {
  return (
    <div
      className="card calendar__card d-flex justify-content-between"
      data-id={id}
    >
      <div className="card__title">
        <span>{title}</span>
      </div>
      <div className="card__avatars" />
      <button type="button" className="card__btn card__btn_close" />
    </div>
  );
}
