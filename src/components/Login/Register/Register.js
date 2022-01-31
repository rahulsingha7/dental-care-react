import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
  const{handleNameChange,handleEmailChange,handlePasswordChange,registerNewUser,error,success} = useAuth()
    return (
        <div className='mb-5 mt-5'>
            <h1>Register</h1>
            <Form onSubmit={registerNewUser}>
  <Form.Group className="mt-3 mb-3  w-25 m-auto" controlId="formBasicName">
    <Form.Control onBlur={handleNameChange} type="name" placeholder="Enter Your Name" required/>
  </Form.Group>
  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter Your Email" required />
  </Form.Group>
  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" autoComplete="on" required/>
  </Form.Group>
    <div className='text-danger mb-2'>{error}</div>
    <div className='text-success mb-2'>{success}</div>
    
    <Button variant="success" type="submit">
     Register
  </Button>
       
  </Form>
  <Link style={{textDecoration: 'none'}} to="/login">
          Already Have An Account
           </Link>
        </div>
    );
};

export default Register;