import React from 'react';
import { TbCarSuv } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";

const InfoSection = () => {
  return (
    <section className='w-full bg-gradient-to-b from-blue-800 to-blue-950 text-white mt-[16%] sm:mt-[10%] md:mt-[6.7%] py-6'>
      <div className='w-[93%] lg:w-[85%] mx-auto flex flex-col items-center justify-center gap-1'>
        <p className='text-xl font-semibold'>Plan your trip now</p>
        <h1 className='text-2xl font-bold'>Quick and easy car rental</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-[3%]'>
          <div className='flex flex-col items-center gap-4'>
            <IoCarSportOutline size={45} />
            <div className='flex flex-col items-center gap-2'>
              <h1 className='text-xl font-semibold'>Select Car</h1>
              <p className='text-justify w-[93%] md:w-full'>Choose from a wide range of vehicles to suit your needs.</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <IoIosContacts size={45} />
            <div className='flex flex-col items-center gap-2'>
              <h1 className='text-xl font-semibold'>Contact Operator</h1>
              <p className='text-justify w-[93%] md:w-full'>Our operators are here to assist you with any inquiries.</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <TbCarSuv size={45} />
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className='text-xl font-semibold'>Let's Drive</h1>
              <p className='text-justify w-[93%] md:w-full'>Enjoy a smooth ride with our fully insured vehicles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
