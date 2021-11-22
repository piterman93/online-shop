import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../styles/Modal.scss";

interface ModalProps {
  onClose: () => void;
}

const Backdrop: React.FC<ModalProps> = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay: React.FC = ({ children }) => {
  return <div className="content">{children}</div>;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlays") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays") as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
