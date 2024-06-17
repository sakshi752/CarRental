import React, { useContext, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FiX } from 'react-icons/fi';
import { Context } from '../../store/context';



const Faq = () => {
  const {faqData,activeIndex,handleFaq}=useContext(Context);
  return (
    <section className='mt-[16%] sm:mt-[10%] md:mt-[6%] w-[93%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 h-[65vh]'>
      <h1 className='text-2xl font-bold text-blue-950 text-center mb-6'>Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div key={faq.id} className='w-full border-b border-gray-200 py-2'>
          <button className='text-lg font-medium text-blue-950 mb-2 flex justify-between items-center w-full' onClick={() => handleFaq(index)}>
            <h1>{faq.question}</h1>
            {activeIndex === index ? <FiX /> : <FaPlus />}
          </button>

          {activeIndex === index && (
            <div className='text-gray-600'>
              {faq.answer}
            </div>
          )}
        </div>
      ))}

    </section>
  );
};

export default Faq;
