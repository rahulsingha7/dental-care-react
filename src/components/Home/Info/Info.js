import React from 'react';
import { Button } from 'react-bootstrap';

const Info = () => {
    return (
        <div className="d-flex  justify-content-evenly bg-success py-5 mt-3 bg-opacity-50 px-1" >
            <div>
              <i className="fas fa-phone fa-2x"></i>
              <h3>24/7 Helpline</h3>
              <Button variant="secondary">Make An Appointment</Button>
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