import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import TourismAndTravelGuide from './TourismAndTravelGuide/TourismAndTravelGuide';
import TourType from '../TourType/TourType';


const Home = () => {
    return (
        <div>
            <Banner/>
            <TourismAndTravelGuide/>
            <TourType/>
        </div>
    );
};

export default Home;