import React from 'react';
import heroImg from '../images/hero-banner.jpg';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-10 mx-auto  w-[90vw] py-10 '>
      <div className='flex flex-col space-y-2 lg:w-[70%]'>
        <p className='text-lg text-blue-700 font-semibold'>Plan your trip now</p>
        <h1 className='text-4xl md:text-5xl font-bold tracking-widest'>
          Save <span className='text-blue-800'>big</span> with our car rental
        </h1>
        <p className='text-lg text-justify'>
          Rent the car of your dreams. With reasonable prices, unlimited miles, flexible pick-up options, and much more.
        </p>
        <div className='flex space-x-3'>
          <button className='bg-blue-900 hover:bg-blue-950 transition-all duration-200 text-white py-3 px-4 rounded font-semibold'>Book a ride</button>
          <button className='bg-blue-900 hover:bg-blue-950 transition-all duration-200 text-white py-3 px-4 rounded font-semibold'>Learn more</button>
        </div>
      </div>
      <div className=' w-[90%] md:w-[100%] lg:w-1/2 flex justify-center items-center'>
        <div className='overflow-hidden rounded shadow-lg'>
          <img src={heroImg} alt="Hero" className='w-full h-auto transition-transform duration-300 transform hover:scale-110' />
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;
