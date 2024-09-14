import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { inputs } from '../constants';
import { addTask } from '../redux/slices/crudSlice';
import { useDispatch } from 'react-redux';

const FormModal = ({ isOpen, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verileri alıp bir nesne haline getir.
    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData.entries());

    dispatch(addTask(taskData));

    close();
  };
  return (
    <Modal show={isOpen} centered className="text-black" onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {inputs.map((prop, index) => (
            <Form.Group key={index}>
              <Form.Label>{prop.label}</Form.Label>
              <Form.Control
                name={prop.name}
                placeholder={prop.holder}
                type={prop.type}
                required
              />
            </Form.Group>
          ))}
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
