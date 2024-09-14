import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/slices/crudSlice';

const ConfirmModal = ({ handleClose, isOpen, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));

    handleClose();
  };
  return (
    <Modal
      show={isOpen}
      onHide={() => {
        handleClose;
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-black">
        <h5 className="font-bold text-lg">
          Are you sure you want to delete this task?
        </h5>
        <p className="text-secondary">
          If you confirm it, it is irreversible.{' '}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
