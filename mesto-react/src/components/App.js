import { useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        children={
          <>
            <input
              className="popup__input"
              type="text"
              name="name"
              id="username"
              placeholder="Имя пользователя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error username-error" />
            <input
              className="popup__input"
              type="text"
              name="about"
              id="description"
              placeholder="Описание профиля"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error description-error" />
          </>
        }
        buttonText="Сохранить"
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-image"
        title="Новое место"
        children={
          <>
            <input
              className="popup__input"
              type="text"
              name="name"
              id="image-name"
              placeholder="Название"
            />
            <span className="popup__input-error username-error" />
            <input
              className="popup__input"
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error description-error" />
          </>
        }
        buttonText="Создать"
      />
      <PopupWithForm name="delete-image" title="Вы уверены?" buttonText="Да" />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="add-avatar"
        title="Обновить аватар"
        children={
          <>
            <input
              className="popup__input"
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error description-error" />
          </>
        }
        buttonText="Сохранить"
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
