import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalError = ({ show, onHide, children }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalError;
