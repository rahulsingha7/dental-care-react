import React from 'react';
import { Link } from 'react-router-dom';
const Blog = (props) => {
    const {blogs} = props;
    const shortDescription = blogs.description.slice(0,77);
    return (
      <div className="col">
            <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={blogs.img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{blogs.name}</h5>
              <p className="card-text">{shortDescription}...</p>
              <Link to={`readBlogs/${blogs.serial}`} className="btn btn-success">
              Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Blog;