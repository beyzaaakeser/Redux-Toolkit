import React from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';

const Crud = () => {
  return (
    <div className="">
      <Container>
        <Stack className='items-end my-5'>
          <Button >New Todo</Button>
        </Stack>
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </Table>
      </Container>
    </div>
  );
};

export default Crud;
