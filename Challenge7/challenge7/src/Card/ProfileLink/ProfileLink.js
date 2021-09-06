import React, { useState } from 'react';
import '../../Styles/Card/ProfileLink.sass';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ModalView = ({ handleClose, show, url }) => {
  const close = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{}</Modal.Body>
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

const ProfileLink = ({ text, url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    //download data from url
    //TODO: make it bitch
    setShow(true);
  };

  const [data, setData] = useState([]);

  return (
    <>
      <ModalView handleClose={handleClose} show={show} />
      <div className="ProfileLink" onClick={() => handleShow(url)}>
        {text}
      </div>
    </>
  );
};
export default ProfileLink;
// data-toggle="modal" data-target="#exampleModal"
