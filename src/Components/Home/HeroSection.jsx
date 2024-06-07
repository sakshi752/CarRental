import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center px-3 sm:px-5 md:px-10 lg:px-2 h-[85vh]'>
      <div className='w-[45%] flex flex-col space-y-2'>
        <h1 className='text-4xl font-bold text-red-600'>Plan your trip now!</h1>
        <p className='text-lg'>Rent the car of your wish. Reasonable prices, unlimited miles, flexible pick-up options and much more</p>
        <Link to={"/cars"} 
        className='bg-red-500 px-2 py-3 rounded text-white font-semibold hover:bg-red-600 shadow-lg shadow-red-200 w-1/4 text-center'>View Cars</Link>
      </div>
      <img className=" h-[19rem] lg:h-[27rem]  hidden sm:block" src="public/red-sports-car-png-1.png" alt="Red Sports Car" />
    </div>
  );
}

export default HeroSection;
