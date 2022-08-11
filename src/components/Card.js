function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button type="button" className="element__delete-button" />
      <img
        className="element__image"
        src={props.card.link}
        alt=""
        onClick={handleClick}
      />
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-button" />
          <span className="element__like-numbers">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
