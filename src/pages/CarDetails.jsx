import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/context';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const { carData } = useContext(Context);
  const [carDetails, setCarDetails] = useState({});
  const [selectedPayMethod, setSelectedPayMethod] = useState('');

  useEffect(() => {
    const data = carData.find((data) => data.id === parseInt(id));
    if (data) {
      setCarDetails(data);
    }
  }, [id, carData]);

  const handlePaymentChange = (e) => {
    setSelectedPayMethod(e.target.value);
  };

  return (
    <section className='w-[93%] lg:w-[80%] mx-auto  relative'>

      <Link to={"/cars"} className='absolute bg-blue-600 hover:bg-blue-800 text-white rounded-full px-3 py-3' >
        <IoIosArrowBack />
      </Link>

      <div className='flex flex-col items-center  md:mt-[2%] gap-20'>
        {/* 1 car info*/}
        <div className='flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-10'>
          <div className='w-full md:h-96 flex items-center justify-center'>
            <img src={carDetails.image} alt={carDetails.carname} className='w-full h-full' />
          </div>
          <div className='w-[100%]'>
            <h1 className='text-2xl text-blue-600 font-semibold'>{carDetails.carname}</h1>
            <p className='text-lg font-semibold'>{carDetails.price}/Day</p>
            <p className='text-md text-justify text-gray-600'>{carDetails.description}</p>
            <div className='flex gap-10 mt-5'>
              <p className='text-lg text-blue-600'>Ac: {carDetails.ac}</p>
              <p className='text-lg text-blue-600'>Passengers: {carDetails.passenger}</p>
              <p className='text-lg text-blue-600'>Fuel: {carDetails.fuel}</p>
            </div>
          </div>
        </div>

        {/* 2 section */}
        <div className='flex flex-col items-center md:flex-row md:items-start justify-between gap-10 w-full'>
          <div className='w-full md:w-2/3'>
            <h1 className='text-lg text-blue-600'>Booking Details</h1>
            <form action="" className='mt-2 flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="text" placeholder='First Name' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="text" placeholder='Last Name' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="email" placeholder='Mail Id' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="number" placeholder='Ph number' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="number" placeholder='No of Passengers' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="date" placeholder='mm/dd/yyyy' />
                <input className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' type="time" placeholder='Journey Time' />
              </div>
              <textarea className='px-2 py-1 focus:border-blue-500 outline-1 outline-blue-500 rounded' placeholder='Write'></textarea>
            </form>
          </div>
          <div className='w-full md:w-1/3'>
            <h1 className='text-lg text-blue-600'>Payment Methods</h1>
            <form className='flex flex-col gap-3 mt-2'>
              <div>
                <input type="radio" name="payment-method" id="credit-card"
                  value="credit-card"
                  onChange={handlePaymentChange}
                  checked={selectedPayMethod === 'credit-card'}
                />
                <label htmlFor="credit-card">Credit Card</label>
              </div>
              <div>
                <input type="radio" name="payment-method" id="debit-card"
                  value="debit-card"
                  onChange={handlePaymentChange}
                  checked={selectedPayMethod === 'debit-card'}
                />
                <label htmlFor="debit-card">Debit Card</label>
              </div>
              <div>
                <input type="radio" name="payment-method" id="bank-transfers"
                  value="bank-transfers"
                  onChange={handlePaymentChange}
                  checked={selectedPayMethod === 'bank-transfers'}
                />
                <label htmlFor="bank-transfers">Bank Transfer</label>
              </div>
              <button className='bg-blue-600 px-3 py-2 rounded text-white font-semibold'>
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CarDetails;
