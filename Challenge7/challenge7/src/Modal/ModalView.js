import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import './Modal.sass';

const ModalView = ({ handleClose, show, children, title, owner }) => {
  const close = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {title} of {owner}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id={'modal-body'}>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        {/*<Button variant="primary" onClick={close}>*/}
        {/*  Save Changes*/}
        {/*</Button>*/}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
