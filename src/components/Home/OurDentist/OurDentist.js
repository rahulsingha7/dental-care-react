import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurDentist = () => {
    const [dentists,setDentists] = useState([]);
    useEffect(()=>{
        fetch('./dentists.json')
        .then(res=>res.json())
        .then(data=>setDentists(data));
    },[])
    return (
        <div className="mt-2 mb-2">
            <h1 className="text-start text-success">Our Dentists</h1>
            <Row xs={1} md={2} lg={3} className='g-3'>
             {
                 dentists.slice(0,3).map((card, id) => (
                    <div key={id}> 
     <Col>
      <Card style={{height:'400px'}} >
        <Card.Img style={{height:'300px'}}  variant="top" src={card.img}/>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
          {card.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

                     </div> 
                 ))}
                 </Row>
                 <div className="mt-3">
           <Link to="/dentists">
           <Button variant="success">View All Dentists</Button>
           </Link>
           </div>
        </div>
    );
};

export default OurDentist;