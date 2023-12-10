import React from 'react';
import './Modal.scss';
import {useModal, useStore} from "../../Store/Store";

const Modal = () => {
  const currentCard = useStore(prop => prop.currentCard)
  return (
    <div className="modal">
      <img src={currentCard.urls.regular} alt="img" />
    </div>
  );
};

export default Modal;