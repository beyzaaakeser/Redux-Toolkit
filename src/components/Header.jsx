import React from 'react';
import { Container, Navbar, NavLink, Stack } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/public/job-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
          />
          Redux Toolkit
        </Navbar.Brand>

        <Stack direction='horizontal' gap={3} className='text-black '>
            <NavLink to="/">CRUD</NavLink>
            <NavLink to="/counter">Counter</NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
