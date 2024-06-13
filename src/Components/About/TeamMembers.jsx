import React from 'react';
import avatar1 from '../images/avatars/avatar1.jpg';
import avatar2 from '../images/avatars/avatar2.jpg';
import avatar3 from '../images/avatars/avatar3.jpg';
import avatar4 from '../images/avatars/avatar4.jpg';

const teamMembersData = [
  {
    name: "John Doe",
    img: avatar1,
    YOE: "10 years"
  },
  {
    name: "Jane Smith",
    img: avatar2,
    YOE: "8 years"
  },
  {
    name: "Samuel Green",
    img: avatar3,
    YOE: "7 years"
  },
  {
    name: "Emily Johnson",
    img: avatar4,
    YOE: "5 years"
  }
];

const TeamMembers = () => {
  return (
    <section className='mt-[9%] sm:mt-[10%] md:mt-[4%] w-[93%] lg:w-[80%] mx-auto flex flex-col items-center justify-center'>
      <p className='text-lg font-semibold text-blue-700'>Experts</p>
      <h1 className='text-3xl font-semibold text-black'>Our Members</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-15 mt-10'>
        {teamMembersData.map(({ name, img, YOE }, index) => (
          <div key={index} className='bg-blue-200 rounded hover:translate-y-2 transition-transform duration-300 drop-shadow-xl'>
            <div className='w-full h-48'>
              <img src={img} className='h-full w-full rounded' alt={name} />
            </div>
            <div className=' flex flex-col items-center py-4'>
              <h2 className='text-lg font-semibold'>{name}</h2>
              <p>{YOE}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
