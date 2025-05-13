import React from "react";
import "../css/CRMmodal.css"

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          ×
        </button>
        <h2>Your Modal Title</h2>
        <p>This is a blank modal. We'll style it next!</p>
      </div>
    </div>
  );
};

export default DemoModal;