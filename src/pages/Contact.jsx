import React from 'react';
import Helmet from '../Components/Helmet';

const Contact = () => {
  return (
    <>
      <Helmet title={"Contact Us"} />
      <section className='w-[93%] lg:w-[80%] mx-auto flex items-center gap-20 md:mt-[5%]'>
        <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
          {/* Contact Form */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-xl font-semibold text-blue-600'>Get in Touch</h1>
            <form action="" className='mt-2 flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <input
                  className='px-2 py-1 focus:border-blue-500 border border-gray-300 rounded'
                  type="text"
                  placeholder='First Name'
                />
                <input
                  className='px-2 py-1 focus:border-blue-500 border border-gray-300 rounded'
                  type="text"
                  placeholder='Last Name'
                />
                <input
                  className='px-2 py-1 focus:border-blue-500 border border-gray-300 rounded'
                  type="email"
                  placeholder='Mail Id'
                />
                <input
                  className='px-2 py-1 focus:border-blue-500 border border-gray-300 rounded'
                  type="number"
                  placeholder='Ph number'
                />
              </div>
              <textarea
                className='px-2 py-1 focus:border-blue-500 border border-gray-300 rounded'
                placeholder='Write your message'
              ></textarea>
              <button className='bg-blue-600 text-white py-2 rounded w-[30%]'>Get in Touch</button>
            </form>
          </div>
          {/* Contact Info */}
          <div className='w-full md:w-1/2 p-6  rounded-lg '>
            <h1 className='text-xl text-blue-600 font-semibold mb-4'>Contact Info</h1>
            <p className='text-gray-700 mb-2'>
              <span className='font-semibold'>Address:</span> 123 xyz, Gujarat, India
            </p>
            <p className='text-gray-700 mb-2'>
              <span className='font-semibold'>Email:</span> <a href='mailto:abc@gmail.com' className='text-blue-500 hover:underline'>abc@gmail.com</a>
            </p>
            <p className='text-gray-700'>
              <span className='font-semibold'>Phone:</span> <a href='tel:9090909090' className='text-blue-500 hover:underline'>9090909090</a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
