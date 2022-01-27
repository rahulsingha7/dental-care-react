import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h1 className="mt-2 mb-3 text-success">Services</h1>
            <Row xs={1} md={2} lg={3} className='g-3'>
             {
                 services.map((card, serial) => (
                    <div key={serial}> 
     <Col>
      <Card style={{height:'450px'}} >
        <Card.Img style={{height:'300px'}}  variant="top" src={card.img}/>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          {/* <Card.Text>
          {card.description}
          </Card.Text> */}
            <Link to={`ViewDetails/${card.serial}`}>
   <Button variant="success">View Details</Button>
   </Link>
        </Card.Body>
      </Card>
    </Col>

                     </div> 
                 ))}
                 </Row>
        </div>
    );
};

export default Services;