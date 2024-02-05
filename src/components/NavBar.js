import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = (props) => {
  

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
    <Container>
      <Nav className="mx-auto fs-4">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#store">STORE</Nav.Link>
        <Nav.Link href="#about">ABOUT</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="#cart">
        <Button variant="outline-primary" onClick={props.onOpen} >cart</Button>
      </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar