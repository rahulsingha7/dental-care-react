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
    const data= fullBlogs.find((fullBlog)=>fullBlog?.serial===id)
    console.log(data);
    return (
        <div className='my-5 pb-2'>
         <img src={data?.img} alt=""/>
         <h1>{data?.name}</h1>
         <p>{data?.description}</p>
        </div>
    );
};

export default ReadBlogs;