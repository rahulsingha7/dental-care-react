import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <>
        <Navbar bg="success" variant="dark" fixed="top" collapseOnSelect expand="lg">
          <Container>
          <i className="fas fa-tooth fa-2x text-light me-2"></i>
          <Navbar.Brand href="#home">Dental Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
    <Nav >
      <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
    </Nav>
    <Nav>
    <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
       
      </>
    );
};

export default Header;