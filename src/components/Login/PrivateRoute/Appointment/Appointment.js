import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Appointment = () => {
    return (
        <div>
            
            <h1 className='mt-4 mb-3'>Get Appointment Today!!!</h1>
            <Form>
  <Form.Group className="mt-3 mb-3  w-25 m-auto" controlId="formBasicName">
    <Form.Control type="name" placeholder="Enter Your Name" required/>
  </Form.Group>
  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter Your Email" required/>
  </Form.Group>
  <Form.Group className="mb-3 w-25 m-auto" controlId="">
  <select class="form-control" id="gender" required>
    <option>Male</option>
    <option>Female</option>
  </select>
  </Form.Group>
  
  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicNumber" >
    <Form.Control type="number" placeholder="Enter Your Phone Number" required />
  </Form.Group>
  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicDate">
    <Form.Control type="date" placeholder="" required/>
  </Form.Group>
  
     
    <Button variant="success" type="submit">
     Submit
  </Button>
   <Link to='/'>
   <Button className='ms-5' variant="danger" type="submit">
     Cancel
  </Button>
   </Link>
  </Form>
    </div>
    );
};

export default Appointment;