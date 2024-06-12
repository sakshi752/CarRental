import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FiX } from 'react-icons/fi';

const faqData = [
  {
    id: 1,
    question: "How do I make a reservation?",
    answer: "You can make a reservation by visiting our website and filling out the reservation form. You can also call our customer service for assistance."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit cards, debit cards, and online payments. You can also pay at our rental office."
  },
  {
    id: 3,
    question: "Is there a mileage limit for rented cars?",
    answer: "Yes, there is a mileage limit for each rental. Please refer to your rental agreement for specific details."
  },
  {
    id: 4,
    question: "Can I add an additional driver?",
    answer: "Yes, you can add an additional driver to your rental agreement. Please provide the necessary details and additional charges may apply."
  },
  {
    id: 5,
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy allows you to cancel your reservation up to 24 hours before the scheduled pickup time without any charges. Cancellations within 24 hours will incur a fee."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='mt-[16%] sm:mt-[10%] md:mt-[6%] w-[93%] lg:w-[70%] mx-auto flex flex-col items-center gap-6'>
      <h1 className='text-2xl font-bold text-blue-950 text-center mb-6'>Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div key={faq.id} className='w-full border-b border-gray-200 py-4'>
          <div className='text-lg font-medium text-blue-950 mb-2 flex justify-between items-center'>
            <h1>{faq.question}</h1>
            <button onClick={() => handleToggleFaq(index)}>
              {activeIndex === index ? <FiX /> : <FaPlus />}
            </button>
          </div>
          {activeIndex === index && (
            <div className='text-gray-600'>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default Faq;
