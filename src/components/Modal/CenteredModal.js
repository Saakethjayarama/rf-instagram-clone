import React from "react";
import { Modal } from "react-bootstrap";
import "./CenteredModal.css";

const CenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="CenteredModal"
    >
      {props.children}
    </Modal>
  );
};

export default CenteredModal;
