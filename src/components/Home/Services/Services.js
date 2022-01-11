import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h1 className="m-3">Services</h1>
        {
             <Row xs={1} md={3} className="g-5" >
             {
                 services.map(service =><Service
                    key={service.id}
                    services={service}
                  ></Service>)
             }
             </Row>
        }
        </div>
    );
};

export default Services;