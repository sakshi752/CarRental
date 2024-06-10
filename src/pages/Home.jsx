import React from 'react';
import InfoSection from '../Components/Home/InfoSection';
import HeroSection from '../Components/Home/HeroSection'
import BookCarCard from '../Components/Home/BookCarCard';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <BookCarCard/>
      <InfoSection/>
    </>
  );
}

export default Home;
