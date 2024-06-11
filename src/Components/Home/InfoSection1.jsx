import React from 'react';
import carModel from '../images/bmw-offer.png'

const InfoSection1 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-blue-800 to-blue-950 text-white mt-[16%] sm:mt-[10%] md:mt-[6.7%] py-6'>
        <div className='w-[93%] lg:w-[60vw] mx-auto flex flex-col md:flex-row items-center justify-center py-2'>
            <div className='w-[100%] md:w-[90%] flex justify-center'>
                <img src={carModel} alt="" className='w-[70%]' />
            </div>
            <div className='w-[80%] md:w-2/4 flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Do you want to join our team?</h1>
                <p className='text-xl font-semibold'>Don't be late</p>
                <button className='bg-white text-black px-3 py-2 mt-5 w-[40%] md:w-[60%] rounded font-semibold'>Become a Driver</button>
            </div>
        </div>
    </section>
  )
}

export default InfoSection1
