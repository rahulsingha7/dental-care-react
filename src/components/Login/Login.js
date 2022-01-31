import { Button, Form } from 'react-bootstrap';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link,useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
 
    const{signInUsingGoogle,handleEmailChange,handlePasswordChange,processLogin,error} =useAuth();
    const location = useLocation();
    const history = useHistory();
      const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = ()=>{
      signInUsingGoogle()
      .then(result=>{
      history.push(redirect_url);
   })
}

    return (
        <div className='mt-3 mb-5'>
          <h1>Login</h1>
            <Form onSubmit={processLogin} >
  <Form.Group className="mb-3 mt-2 w-25 m-auto" controlId="formBasicEmail">
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
    <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password" autoComplete='on' required />
  </Form.Group>
     <div className='text-danger mb-2'>{error}</div>
    <Button  variant="success" type="submit">
     Login
  </Button>
  </Form>
  <Link style={{textDecoration: 'none'}} to="/register">
          Dont Have An Account
           </Link>
      <h4 className='text-center mt-2 mb-4'>______________OR______________</h4>
             <Button onClick={handleGoogleLogin} variant="success" className='mb-4'><i className="fab fa-google me-2"></i>Login With Google</Button>
        </div>
    );
};

export default Login;