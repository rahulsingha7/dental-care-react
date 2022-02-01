
import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Banner/Banner1.jpg'
import banner2 from '../../../images/Banner/Banner2.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    <Carousel.Caption className=" d-flex flex-column align-items-center justify-content-center h-100 text-dark"  >
     <h1 className=' fs-1 fw-bold'>Dental Care</h1>
     <h3 className='fw-bold'>A Smile You <br/>Can Be Proud Of</h3>
     <Link to={`/appointment`}>
     <Button variant="dark" style={{width:'150px',marginLeft:'auto',marginRight:'auto'}}>Make An Appointment</Button>
     </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className=" d-flex flex-column align-items-center justify-content-center h-100 text-dark"  >
      <h4 className='mt-1'>Protect teeth and take charge of your dental health</h4>
      <p >We offer top quality dental service <br/> so that you can have healty and beautiful smile</p>
      <Link to={`/appointment`} style={{marginLeft:'auto',marginRight:'auto'}}>
      <Button variant="dark" style={{width:'75%'}}>Make An Appointment</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;