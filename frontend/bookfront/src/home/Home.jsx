import React from 'react'
import Banner from '../Components/Banner';
import FavBooks from './FavBooks';
import GetBooks from './GetBooks';
import PromoBanner from './PromoBanner';
import MyFooter from '../Components/MyFooter';
// import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Banner/>
        <FavBooks/>
        <GetBooks/>
        <PromoBanner/>
        <MyFooter/>
    </div>
  )
}

export default Home;