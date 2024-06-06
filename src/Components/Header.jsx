import React from 'react'
import { Link } from 'react-router-dom';
import { FaCarSide, FaEarthAfrica } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex flex-col'>
      {/* section1 */}
      <div className='flex items-center justify-between'>
        <p>Need help?8031284120</p>
        <div>
          <button>login</button>
          <button>Register</button>
        </div>
      </div>

      {/* section2 */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <FaCarSide className='text-red-500 text-4xl' />
          CarRental
        </div>
        <div className='flex items-center'>
          <FaEarthAfrica />
          <h1>Vadodara,Gujrat</h1>
        </div>
        <div className='flex items-center'>
          <FaRegClock />
          monday-sunday
        </div>
      </div>

      {/* section3 */}
      <div className='flex items-center justify-between'>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/cars"}>Cars</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
          <input type="search" />
        </div>
      </div>
    </div>

  )
}

export default Header
