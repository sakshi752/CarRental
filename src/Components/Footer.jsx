import React from 'react';
import { FaCarSide } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='w-full bg-gradient-to-b from-blue-800 to-blue-950 text-white mt-[16%] sm:mt-[10%] md:mt-[6.7%] py-6'>
      <div className='w-[93%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10'>

        <div className='flex flex-col w-1/2'>
          <div className='flex gap-3'>
            <FaCarSide className={`text-[3rem]`} />
            <div>
              <h1 className={`text-2xl font-semibold`}>Car</h1>
              <p className={`text-md font-semibold`}>Rental</p>
            </div>
          </div>
          <div>
            <p className='text-sm text-blue-200'>Rent the car of your dreams. With reasonable prices, unlimited miles, flexible pick-up options, and much more.</p>
          </div>
        </div>
        <section className='flex gap-10 w-1/2 justify-center'>
          <div className=''>
            <h1>Quick Links</h1>
            <ul className='text-sm text-blue-200'>
              <li>About Us</li>
              <li>Our services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=''>
            <h1>Head Office</h1>
            <ul className='text-sm text-blue-200'>
              <li>123 Manjalpur, Vadodara, India</li>
              <li>Ph no: 9090909090</li>
              <li>Email: demo@gmail.com</li>
              <li>Office Time: 10am-6pm</li>
            </ul>

          </div>
          
        </section>
      </div>

      {/* below section */}
      <div className='text-center mt-20'>
        <h1>© Copyright 2024, developed by Sakshi Patel. All Rights Reserved</h1>
      </div>
    </section>
  )
}

export default Footer
