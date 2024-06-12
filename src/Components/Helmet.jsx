import React from 'react';
import helmet from './images/helmet.jpg';

const Helmet = ({title}) => {
    return (
        <div className='w-full relative'>
            <div className='w-full h-[300px] bg-gray-900/90'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={helmet} alt="Support" />
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </div>
    )
}

export default Helmet;
