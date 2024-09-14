import React, { useState } from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import FormModal from '../components/FormModal';

const Crud = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <Container>
        <Stack className='items-end my-5'>
          <Button onClick={() => setIsOpen(true)}>New Todo</Button>
        </Stack>
        <Table variant='dark' responsive striped hover bordered>
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
                <tr>
                    <td>1</td>
                    <td>Navbar Revision</td>
                    <td>Furkan</td>
                    <td>Beyza</td>
                    <td>17.09.2024</td>
                    <td>
                        <Button size='sm'><MdEdit /></Button>
                        <Button variant="danger" size='sm' className='ms-2'><FaTrashAlt /></Button>
                    </td>
                </tr>
            </tbody>
        </Table>
      </Container>

      <FormModal isOpen={isOpen} close={()=> setIsOpen(false)}/>
    </div>
  );
};

export default Crud;
