import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div className='mt-2'>
              {
             <Row xs={1} md={1} lg={2} >
             {
                 blogs.map(blog=><Blog
                    key={blog.serial}
                    blogs={blog}
                 ></Blog>)
             }
             </Row>
        }
        </div>
    );
};

export default Blogs;