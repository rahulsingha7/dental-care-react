import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ReadBlogs = () => {
    const{id} =useParams();
    const [fullBlogs,setFullBlogs] = useState([]);
    useEffect(()=>{
        fetch('../blogs.json')
        .then(res=>res.json())
        .then(data=>setFullBlogs(data));
    },[])
    const data= fullBlogs.find((blog)=>blog?.serial===id)
    console.log(data);
    return (
        <div>
         <img src={data?.img} />
        </div>
    );
};

export default ReadBlogs;