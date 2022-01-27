import React from 'react';

const Footer = () => {
    return (
        <div className='bg-success mt-2'>
          <div className="row">
            <div className="col-6 col-md-4">
                <div className='d-flex ms-5 mt-4'>
                 <i className="fas fa-tooth fa-2x text-light me-2"></i>
                 <h3 className='text-light'>Dental Care</h3>
                </div>
                <div className="col-6 col-md-4">
                   <p className='text-light ms-5'>Find Us On:</p>
                  <div className='d-flex ms-5'>
                  <i className="fab fa-facebook fa-2x text-info me-2"></i>
                   <p className='text-light'>Facebook</p>
                  </div>
                  <div className='d-flex ms-5'>
                  <i className="fab fa-twitter fa-2x text-info me-2"></i>
                   <p className='text-light'>Twitter</p>
                  </div>
                  <div className='d-flex ms-5'>
                  <i className="fab fa-snapchat fa-2x text-warning me-2"></i>
                   <p className='text-light'>Snapchat</p>
                  </div>
            </div>
        </div>
        <div className="col-6 col-md-4 text-light">
                <h4 className='mt-3 mb-3'>Policies</h4>   
                <p>Privacy Policy</p>   
                <p>Cookie Policy</p>   
                <p>Advertising Policy</p>   
                <p>Terms of Use</p>   
         </div>
        <div className="col-6 col-md-4 text-light">
                <h4 className='mt-3 mb-3'>For Advertiser</h4>     
                <p>Advertise With Us</p>   
                <p>Advertising Policy</p>
         </div>
        </div>
        <p className='text-light pb-4'>©2022 Dental Care.All rights reserved.</p>
            </div>
    );
};

export default Footer;