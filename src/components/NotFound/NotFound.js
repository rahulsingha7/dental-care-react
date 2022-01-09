import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/NotFound/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img src={img} alt = "" />
           <div>
           <Link to="/">
           <Button variant="warning">Back To Home</Button>
           </Link>
           </div>
        </div>
    );
};

export default NotFound;