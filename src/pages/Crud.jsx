import React, { useState } from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import FormModal from '../components/FormModal';
import TaskTable from '../components/TaskTable';

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Container>
        <Stack className="items-end my-5">
          <Button onClick={() => setIsOpen(true)}>New Todo</Button>
        </Stack>

        <TaskTable />
      </Container>

      <FormModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
