import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
  const{user,logOut} = useAuth();
    return (
        <>
        <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <i className="fas fa-tooth fa-2x text-light me-2"></i>
          <Navbar.Brand as={HashLink} to="/home">Dental Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
    <Nav >
      <Nav.Link className="text-light" as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link className="text-light" as={HashLink} to="/services">Services</Nav.Link>
      <Nav.Link className="text-light" as={HashLink} to="/dentists">Dentists</Nav.Link>
      <Nav.Link className="text-light" as={HashLink} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className="text-light" as={HashLink} to="/register">Register</Nav.Link>
    </Nav>
    <Nav>
    { user?.email?
       <Button onClick={logOut} variant="success">Log Out</Button>:
        <Nav.Link className="text-light" as={HashLink} to="/login">Login</Nav.Link>
        }
    </Nav>
    <Nav> 
    
     <img className='mx-auto' style={{width:'20%'}}  src={ user?.photoURL} />
     <Navbar.Text className='text-light'>
      {user?.displayName || user?.email}
     </Navbar.Text> 
    </Nav>
   
  </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;