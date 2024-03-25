import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Popular from '../items/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';
 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;