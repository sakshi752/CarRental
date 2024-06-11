import React, { useState } from 'react'
import { FaCarSide, FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookCarCard = () => {
  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("")
  const [car, setCar] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  return (
    <section id='bookCar' className='w-[93%] lg:w-[70%] mx-auto mt-[3.4%] flex flex-col space-y-3 bg-white drop-shadow-xl rounded-md px-5 py-6'>
      <h1 className='text-xl font-bold'>Book a car</h1>
      <form action="" className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='car' className='flex items-center gap-2'>
            <FaCarSide size={24} className='text-blue-800' />
            <span className='font-semibold'>
              Select Car
            </span>
          </label>
          <select
            id='car'
            value={car}
            onChange={(e) => setCar(e.target.value)}
            required
            className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='' disabled>Select a Car</option>
            <option value='Toyota Camry'>Toyota Camry</option>
            <option value='Honda Accord'>Honda Accord</option>
            <option value='Ford Mustang'>Ford Mustang</option>
            <option value='Chevrolet Malibu'>Chevrolet Malibu</option>
            <option value='Tesla Model 3'>Tesla Model 3</option>
            <option value='Maruti Suzuki Swift'>Maruti Suzuki Swift</option>
            <option value='Hyundai i10'>Hyundai i10</option>
            <option value='Hyundai i20'>Hyundai i20</option>
            <option value='Tata Tiago'>Tata Tiago</option>
            <option value='Mahindra Bolero'>Mahindra Bolero</option>
            <option value='Renault Kwid'>Renault Kwid</option>
          </select>
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='pickLoaction' className='flex items-center gap-2'>
            <FaLocationDot size={24} className='text-blue-800' />
            <span className='font-semibold'>
              Pick-Up
            </span>
          </label>
          <select
            id='pickLoaction'
            value={pickLocation}
            onChange={(e) => setPickLocation(e.target.value)}
            required
            className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='' disabled>Select Pickup Location</option>
            <option value='Vadodara Railway Station'>Vadodara Railway Station</option>
            <option value='Vadodara Airport'>Vadodara Airport</option>
            <option value='Alkapuri'>Alkapuri</option>
            <option value='Sayajigunj'>Sayajigunj</option>
            <option value='Akota'>Akota</option>
          </select>
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='dropLocation' className='flex items-center gap-2'>
            <FaLocationDot size={24} className='text-blue-800' />
            <span className='font-semibold'>
              Drop-of
            </span>
          </label>
          <select
            id='dropLocation'
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            required
            className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='' disabled>Select Drop-of location</option>
            <option value='Vadodara Railway Station'>Vadodara Railway Station</option>
            <option value='Vadodara Airport'>Vadodara Airport</option>
            <option value='Alkapuri'>Alkapuri</option>
            <option value='Sayajigunj'>Sayajigunj</option>
            <option value='Akota'>Akota</option>
          </select>
        </div>
        <div>
          <label htmlFor='pickDate' className='flex items-center gap-2'>
            <MdDateRange size={24} className='text-blue-800' />
            <span className='font-semibold'>
              Pick-up
            </span>
          </label>
          <DatePicker
            id='pickDate'
            selected={pickDate}
            onChange={(date) => setPickDate(date)}
            dateFormat='MMMM d, yyyy'
            className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            required
          />
        </div>
        <div>
          <label htmlFor='dropDate' className='flex items-center gap-2'>
            <MdDateRange size={24} className='text-blue-800' />
            <span className='font-semibold'>
              Drop-off
            </span>
          </label>
          <DatePicker
            id='dropDate'
            selected={dropDate}
            onChange={(date) => setDropDate(date)}
            dateFormat='MMMM d, yyyy'
            className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            required
          />
        </div>

        <div className='flex'>
          <button className='px-3 py-4 bg-blue-950 text-white rounded w-[100%] md:w-[50%]'>Book</button>
        </div>
      </form>
    </section>
  )
}

export default BookCarCard
