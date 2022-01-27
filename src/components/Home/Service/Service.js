
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react'
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) =>  {
  const [services,setServices] = useState([]);
  useEffect(()=>{
      fetch('./services.json')
      .then(res=>res.json())
      .then(data=>setServices(data));
  },[])


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <div className="mt-3 mb-3">
          <h1 className="text-success">Services</h1>
      </div>
      <Carousel
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={props.deviceType == "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet"]}
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    renderDotsOutside={false}
  >
    {services.map((card, serial) => (
          <div className="ms-2 me-2" key={serial}>   
           <Card style={{height: '450px'}}>
        <Card.Img style={{height:'300px'}} variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
      {/* <Card.Text>
       {card.description}
    </Card.Text> */}
   <Link to={`viewDetails/${card.serial}`}>
   <Button variant="success">View Details</Button>
   </Link>
  </Card.Body>
</Card>
          </div>
        ))}
  </Carousel>
    </div>
  )
}
export default Service;
