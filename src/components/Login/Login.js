import { Button, Form } from 'react-bootstrap';
import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const{signInUsingGoogle} =useAuth();
    return (
        <div>
            <Form>
  <Form.Group className="mb-3 mt-5 w-25 m-auto" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    <Button variant="success" type="submit">
     Login
  </Button>
  </Form>
              <a href="/signUp" alt="">Dont Have An Account</a>
      <h4 className='text-center mt-2 mb-4'>______________OR______________</h4>
             <Button onClick={signInUsingGoogle} variant="success" className='mb-4'><i className="fab fa-google me-2"></i>Login With Google</Button>
        </div>
    );
};

export default Login;