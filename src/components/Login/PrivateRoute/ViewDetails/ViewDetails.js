import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ViewDetails = () => {
    const {id} =useParams();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetch('../services.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[])
    const data= details.find((detail)=>detail?.serial===id)
    return (
        <div className='my-5 pb-2'>
            <img src={data?.img} alt="" />
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
        </div>
    );
};

export default ViewDetails;