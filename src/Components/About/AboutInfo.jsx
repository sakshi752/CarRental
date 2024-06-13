import React from 'react'
import { TbCarSuv } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import carModel from '../images/bmw-offer.png';
import helmet from '../images/helmet.jpg';

const AboutInfo = () => {
    return (
        <section className='mt-[9%] sm:mt-[10%] md:mt-[4%] w-[93%] lg:w-[80%] mx-auto flex flex-col items-center gap-16 md:gap-20'>
            {/* 1 */}
            <div className='flex flex-col items-center md:flex-row gap-16'>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <p className='text-lg font-semibold '>About Us</p>
                    <h1 className='text-3xl  font-semibold text-blue-700'>Welcome to Car Rental Service</h1>
                    <p className='text-md text-justify mt-3'>Discover the freedom of the open road with our top-notch car rental service. Whether you're planning a weekend getaway or a business trip, we offer a wide range of vehicles to suit your needs. Enjoy competitive rates, flexible rental options, and exceptional customer service. Your perfect ride is just a reservation away.</p>
                    <div className='flex mt-4 gap-3 sm:gap-5 md:gap-10'>
                        <div className='flex gap-1 text-blue-700'>
                            <IoCarSportOutline size={25} />
                            <h1 className=''>Select Car</h1>
                        </div>
                        <div className='flex gap-1 text-blue-700'>
                            <IoIosContacts size={25} />
                            <h1 className=''>Contact Operator</h1>
                        </div>
                        <div className='flex gap-1 text-blue-700'>
                            <TbCarSuv size={25} />
                            <h1 className=''>Let's Drive</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img src={carModel} className='w-full sm:w-[75%] md:w-[90%]' alt="" />
                </div>
            </div>
            {/* 2 */}
            <div className='flex flex-col-reverse items-center md:flex-row gap-10'>
                <div className='w-full md:w-1/2 flex items-center md:items-start'>
                    <img src={helmet} className='w-full sm:w-[75%] md:w-[90%] rounded drop-shadow-xl' alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h1 className='text-3xl  font-semibold text-blue-700'>We are committed to provide safe ride solution</h1>
                    <p className='text-md text-justify mt-3'>Discover the freedom of the open road with our top-notch car rental service. Whether you're planning a weekend getaway or a business trip, we offer a wide range of vehicles to suit your needs. Enjoy competitive rates, flexible rental options, and exceptional customer service. Your perfect ride is just a reservation away.</p>
                    <h1 className='text-lg font-semibold text-blue-700 flex items-center gap-3 mt-4'><IoMdCall className='text-3xl' /> Need help? 9090909090</h1>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo
