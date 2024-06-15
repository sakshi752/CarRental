import React, { useState } from 'react'
import avatar1 from '../images/avatars/avatar1.jpg';
import avatar2 from '../images/avatars/avatar2.jpg';
import avatar3 from '../images/avatars/avatar3.jpg';
import avatar4 from '../images/avatars/avatar4.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Brown",
    msg: "Amazing service! The car was clean and the rental process was smooth.",
    img: avatar1
  },
  {
    id: 2,
    name: "David Lee",
    msg: "Highly recommend this rental company. Great customer support and affordable prices.",
    img: avatar2
  },
  {
    id: 3,
    name: "Emma Wilson",
    msg: "The vehicle was in excellent condition and the staff were very friendly.",
    img: avatar3
  },
  {
    id: 4,
    name: "James Anderson",
    msg: "Had a wonderful experience. The car selection is top-notch and the rates are unbeatable.",
    img: avatar4
  }
];

const Testimonials = () => {
  const [current,setCurrent]=useState(1);
  return (
    <div className='mt-[16%] sm:mt-[10%] md:mt-[6%] w-[93%] lg:w-[70%] mx-auto flex flex-col items-center gap-6'>
      <h1 className='text-2xl font-bold text-blue-950 text-center mb-6'>Reviews</h1>
      <div className='flex'>
        {testimonials.map(({ id, name, msg, img }) => (
          <div key={id}>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <h1>{name}</h1>
              <p>{msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
