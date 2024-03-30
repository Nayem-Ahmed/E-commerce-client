import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Popular from '../items/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';
import CategoryGallery from '../../Components/CategoryGallary/CategoryGellary';
 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryGallery></CategoryGallery>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;