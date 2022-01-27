import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Info = () => {
    return (
        <div className="d-flex  justify-content-evenly bg-success py-5 mt-3 bg-opacity-50 px-1" >
            <div>
              <i className="fas fa-phone fa-2x"></i>
              <h3>24/7 Helpline</h3>
              <Link to={`/appointment`}>
              <Button variant="secondary">Make An Appointment</Button>
              </Link>
            </div>
            <div>
              <i className="fas fa-question fa-2x"></i>
              <h3>Ask a question</h3>
              <p>Have any Queries? Ask</p>
            </div>
            <div>
            <i className="fas fa-briefcase-medical fa-2x"></i>
            <h3>Emergency Care</h3>
            <p>Always for you</p>
            </div>
        </div>
    );
};

export default Info;