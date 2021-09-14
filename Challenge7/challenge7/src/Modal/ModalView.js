import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import './Modal.sass';

const ModalView = ({ handleClose, show, children, title, owner }) => {
  const close = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
      <Modal.Header closeButton id={'modal-header'}>
        <Modal.Title>
          {title} of {owner}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id={'modal-body'}>{children}</Modal.Body>
      <Modal.Footer id={'modal-footer'}>
        <Button variant="secondary" onClick={close} id={'modal-close-button'}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
