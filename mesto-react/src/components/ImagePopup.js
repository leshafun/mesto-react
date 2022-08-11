function ImagePopup(props) {
  return (
    <div
      className={`popup__container - image ${props.isOpen ? "popup_open" : ""}`}
    >
      <button
        type="button"
        className="popup__button-close popup__button-close-image"
        onClick={props.onClose}
      />
      <img
        src={props.card?.link}
        className="popup__image"
        alt="Картинка не открылась"
      />
      <h3 className="popup__image-title">{props.card?.name}</h3>
    </div>
  );
}

export default ImagePopup;
