import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import ConfirmModal from './ConfirmModal';

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudReducer);
  const [isDelOpen, setIsDelOpen] = useState(false);
  return (
    <Table variant="dark" responsive striped hover bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Author</th>
          <th>Assigned</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <React.Fragment key={task.id}>
            <tr >
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned}</td>
              <td>{task.end_date}</td>
              <td className='flex gap-2 justify-center items-center flex-wrap'>
                <Button size="sm">
                  <MdEdit />
                </Button>
                <Button
                  onClick={() => setIsDelOpen(true)}
                  variant="danger"
                  size="sm"
                  
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
            <ConfirmModal
              id={task.id}
              isOpen={isDelOpen}
              handleClose={() => setIsDelOpen(false)}
            />
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
