function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_open" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        />
        <h3 className="popup__title">{props.title}</h3>
        <form
          name="profile-form"
          className="popup__form"
          method="post"
          action="#"
          name={`${props.name}-form`}
          noValidate
        >
          {props.children}
          <button type="submit" className="popup__button-save">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
