
import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Banner/Banner1.jpg'
import banner2 from '../../../images/Banner/Banner2.jpg'
import { Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className=" d-flex flex-column align-items-start justify-content-center h-100"  >
     <h1 className='text-secondary fs-1 fw-bold'>Dental Care</h1>
     <h3 className='text-secondary fw-bold'>A Smile You <br/>Can Be Proud Of</h3>
      <Button variant="secondary" style={{width:'150px',marginLeft:'25px'}}>Make An Appointment</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className=" d-flex flex-column align-items-start justify-content-center h-100"  >
      <h1 className='fs-1 fw-bold' >Protect teeth and take charge of your dental health</h1>
      <h3 className='fw-bold'>We offer top quality dental service so that you can have healty and beautiful smile</h3>
      <Button variant="dark" style={{width:'150px',marginLeft:'auto',marginRight:'auto'}}>Make An Appointment</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;