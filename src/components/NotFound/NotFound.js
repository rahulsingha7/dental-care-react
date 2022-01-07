import React from 'react';
import img from '../../images/NotFound/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img src={img} alt = "" />
           <div>
           <button>Back To Home</button>
           </div>
        </div>
    );
};

export default NotFound;