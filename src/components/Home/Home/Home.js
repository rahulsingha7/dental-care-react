import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import OurDentist from '../OurDentist/OurDentist';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <OurDentist></OurDentist>
            <Info></Info>
            
        </div>
    );
};

export default Home;