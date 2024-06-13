import React from 'react';
import car1 from '../Components/images/carModels/banner1.png';

const CarDetails = () => {
  return (
    <section className='w-[93%] lg:w-[80%] mx-auto flex flex-col items-center gap-20 mt-[-2%]'>
      {/* 1 */}
      <div className='flex items-center gap-10'>
        <div className='h-96'>
          <img src={car1} alt="" className='w-full' />
        </div>
        <div className='w-[100%]'>
          <h1 className='text-2xl text-blue-600 font-semibold'>Audi A1 S-Line</h1>
          <p className='text-lg font-semibold'>$50/Day</p>
          <p className='text-md text-justify text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nihil beatae atque illo harum inventore voluptatum, similique corrupti eos doloremque dolor laborum quia rerum, exercitationem, qui nesciunt magnam laboriosam illum?</p>
          <div className='flex gap-10 mt-5'>
            <p className='text-lg text-blue-600'>Ac:yes</p>
            <p className='text-lg text-blue-600'>passengers:4</p>
            <p className='text-lg text-blue-600'>Fuel:Petrol</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full'>
        <div className='w-2/3'>
          <h1>Booking Details</h1>
        <form action="">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='Mail Id' />
          <input type="number" placeholder='Ph number' />
          <input type="number" placeholder='No of Passengers' />
          <input type="date" placeholder='mm/dd/yyyy' />
          <input type="Journey Time" placeholder='Journery Time' />
          <textarea placeholder='Write'></textarea>
        </form>
        </div>
        <div className='w-1/3'>
          <h1>Payment Methods</h1>
        </div>
      </div>
    </section>
  )
}

export default CarDetails
