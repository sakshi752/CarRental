import React from 'react'
import { Link } from 'react-router-dom';
import { FaCarSide, FaEarthAfrica } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-between py-3 px-2 sm:px-3 md:px-7 '>
        <div className='flex items-center gap-3 cursor-pointer'>
          <FaCarSide className='text-red-500 text-[3.2rem]' />
          <div>
            <h1 className='text-2xl font-bold'>Car</h1>
            <p className='text-md font-semibold'>Rental</p>
          </div>
        </div>
        <div className='flex space-x-3 text-md font-semibold'>
          <Link className='hover:text-red-600 hover:underline' to={"/"}>Home</Link>
          <Link className='hover:text-red-600 hover:underline' to={"/about"}>About</Link>
          <Link className='hover:text-red-600 hover:underline' to={"/blogs"}>Blogs</Link>
          <Link className='hover:text-red-600 hover:underline' to={"/cars"}>Cars</Link>
          <Link className='hover:text-red-600 hover:underline' to={"/contact"}>Contact</Link>
        </div>
        <div className='flex gap-4'>
          <button className='bg-red-500 px-2 py-3 rounded text-white font-semibold hover:bg-red-600 shadow-lg shadow-red-200'>Login</button>
          <button className='bg-red-500 px-2 py-3 rounded text-white font-semibold hover:bg-red-600 shadow-lg shadow-red-200'>Register</button>
        </div>
      </div>
      <div className='flex items-center justify-between bg-red-500 text-white py-1 px-2 sm:px-3 md:px-7 '>
        <div>
          <h1>need help?9090909090</h1>
        </div>
        {/* <div className='flex items-center'>
          <FaEarthAfrica />
          <h1>Vadodara,Gujrat</h1>
        </div> */}
        <div className='flex items-center gap-3'>
          <FaRegClock />
          <h1>Monday-Sunday</h1>
        </div>
      </div>
    </div>


  )
}

export default Header
