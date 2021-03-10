export default function Card() {
  const title = '123',
    avatarImgs = '321',
    id = '123321';

  return (
    <div className="card calendar__card d-flex justify-content-between" data-id={id}>
      <div className="card__title"><span>{title}</span></div>
      <div className="card__avatars">{avatarImgs}</div>
      <button type="button" className="card__btn card__btn_close"></button>
    </div>
  )
}