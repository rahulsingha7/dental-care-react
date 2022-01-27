import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Dentist from '../Dentist/Dentist';

const Dentists = () => {
    const [dentists,setDentists] = useState([]);
    useEffect(()=>{
        fetch('./dentists.json')
        .then(res=>res.json())
        .then(data=>setDentists(data));
    },[])
    return (
        <div className='mt-2'>
              {
             <Row xs={1} md={2} lg={3} className="g-3" >
             {
                 dentists.map(dentist=><Dentist
                 key={dentist.id}
                 dentists={dentist}
                 ></Dentist>)
             }
             </Row>
        }
        </div>
    );
};

export default Dentists;