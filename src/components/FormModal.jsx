import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const FormModal = ({ isOpen, close }) => {
  return (
    <Modal show={isOpen} centered className="text-black" onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Selam</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>Cancel</Button>
        <Button >Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
