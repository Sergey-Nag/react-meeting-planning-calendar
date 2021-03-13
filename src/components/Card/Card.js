import React from 'react';

export default async function Card({ event }) {
  if (await event === undefined) return <div />;

  const { id, data } = event;
  console.log(await event);

  return (
    <div
      className="card calendar__card d-flex justify-content-between"
      data-id={id}
    >
      <div className="card__title">
        <span>{data}</span>
      </div>
      <div className="card__avatars" />
      <button type="button" className="card__btn card__btn_close" />
    </div>
  );
}
