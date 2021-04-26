import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  return (
    <div className={`model-overlay show-modal`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
      </div>
    </div>
  );
};

export default Modal;
