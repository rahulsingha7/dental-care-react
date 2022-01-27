import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dentist = (props) => {
    const {dentists} = props;
    return (
        <div>   
    <Col>
      <Card className='service-card' style={{height:'400px'}}>
        <Card.Img style={{height:'300px'}} variant="top" src={dentists.img}/>
        <Card.Body>
        <Card.Title>{dentists.name}</Card.Title>
          <Card.Text style={{paddingLeft:'15px',paddingRight:'15px'}}>
            {dentists.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Dentist;