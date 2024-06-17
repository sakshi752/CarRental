import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi';
import { Context } from '../store/context';

const Header = () => {

  const { navOpen, toggleNav,
    color, changeColor } = useContext(Context);
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (

    <nav className={`h-[70px] md:h-[80px] z-10 sticky top-0 drop-shadow-lg transition-all duration-300 ${color ? "bg-blue-950" : "bg-blue-50"}`}>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center gap-3 cursor-pointer'>
          <FaCarSide className={`text-[3rem] ${color ? "text-white" : "text-blue-950"}`} />
          <div>
            <h1 className={`text-2xl font-semibold ${color ? "text-white" : "text-blue-950"}`}>Car</h1>
            <p className={`text-md font-semibold ${color ? "text-white" : "text-blue-950"}`}>Rental</p>
          </div>
        </div>
        <div className='hidden md:flex space-x-3 text-md font-semibold'>
          <Link className={`hover:underline ${color ? "text-white" : "text-black"}`} to={"/"}>Home</Link>
          <Link className={`hover:underline ${color ? "text-white" : "text-black"}`} to={"/about"}>About</Link>
          <Link className={`hover:underline ${color ? "text-white" : "text-black"}`} to={"/blogs"}>Blogs</Link>
          <Link className={`hover:underline ${color ? "text-white" : "text-black"}`} to={"/cars"}>Cars</Link>
          <Link className={`hover:underline ${color ? "text-white" : "text-black"}`} to={"/contact"}>Contact</Link>
        </div>
        <div className='gap-4 hidden md:flex'>
          <button className={`px-2 py-3 rounded font-semibold ${color ? "bg-white text-black" : "bg-blue-950 text-white"}`}>Login</button>
          <button className={`px-2 py-3 rounded font-semibold ${color ? "bg-white text-black" : "bg-blue-950 text-white"}`}>Register</button>
        </div>
        <div className={`md:hidden ${color ? "text-white" : "text-black"}`} onClick={toggleNav}>
          {navOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>
      <div className={`w-[200px] min-h-screen px-8 absolute top-0 pt-4 bg-blue-950 md:hidden flex flex-col space-y-5 transition-transform duration-500 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex items-center gap-3 cursor-pointer'>
          <FaCarSide className='text-white text-[3.5rem]' />
          <div>
            <h1 className='text-2xl font-bold text-white'>Car</h1>
            <p className='text-md font-semibold text-white'>Rental</p>
          </div>
        </div>
        <Link className='hover:text-red-50 hover:underline text-white' to={"/"}>Home</Link>
        <Link className='hover:text-red-50 hover:underline text-white' to={"/about"}>About</Link>
        <Link className='hover:text-red-50 hover:underline text-white' to={"/blogs"}>Blogs</Link>
        <Link className='hover:text-red-50 hover:underline text-white' to={"/cars"}>Cars</Link>
        <Link className='hover:text-red-50 hover:underline text-white' to={"/contact"}>Contact</Link>

        <div className='gap-4 flex flex-col'>
          <button className='bg-white px-2 py-3 rounded text-black font-semibold'>Login</button>
          <button className='bg-white px-2 py-3 rounded text-black font-semibold'>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
