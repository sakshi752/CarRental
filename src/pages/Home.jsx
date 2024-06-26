import React from 'react';
import InfoSection from '../Components/Home/InfoSection';
import HeroSection from '../Components/Home/HeroSection'
import BookCarCard from '../Components/Home/BookCarCard';
import CarModels from '../Components/Home/CarModels';
import Testimonials from '../Components/Home/Testimonials';
import InfoSection1 from '../Components/Home/InfoSection1';
import Faq from '../Components/Home/Faq';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <BookCarCard/>
      <InfoSection/>
      <CarModels/>
      <InfoSection1/>
      <Faq/>
      {/* <Testimonials/> */}
    </>
  );
}

export default Home;
