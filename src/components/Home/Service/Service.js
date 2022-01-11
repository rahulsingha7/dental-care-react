import React from 'react';
import {Button, Card, Col} from 'react-bootstrap';
const Service = (props) => {
  const {services} = props;
    return (
        <div>     
    <Col>
      <Card className='service-card' style={{height:'600px'}}>
        <Card.Img style={{height:'400px'}} variant="top" src={services.img}/>
        <Card.Body>
          <Card.Title>{services.name}</Card.Title>
          <Card.Text>
            {services.description}
          </Card.Text>
          <Button variant="success">Make An Appointment</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;