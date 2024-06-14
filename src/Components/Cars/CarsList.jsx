import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSortAmountUpAlt } from "react-icons/fa";
import { Context } from '../../store/context';

// const carData = [
//     {
//         id: 1,
//         image: car1,
//         price: "$35",
//         carname: "Audi A1 S-Line",
//         ac: "Yes",
//         fuel: "Petrol",
//         passenger: "4",
//     },
//     {
//         id: 2,
//         image: car2,
//         price: "$30",
//         carname: "VW Golf 6",
//         ac: "Yes",
//         fuel: "Diesel",
//         passenger: "4",
//     },
//     {
//         id: 3,
//         image: car3,
//         price: "$40",
//         carname: "Toyota Camry",
//         ac: "Yes",
//         fuel: "Petrol",
//         passenger: "4",
//     },
//     {
//         id: 4,
//         image: car4,
//         price: "$35",
//         carname: "Swift",
//         ac: "Yes",
//         fuel: "Petrol",
//         passenger: "4",
//     },
//     {
//         id: 5,
//         image: car5,
//         price: "$30",
//         carname: "Jeep Avenger",
//         ac: "Yes",
//         fuel: "Diesel",
//         passenger: "5",
//     },
//     {
//         id: 6,
//         image: car6,
//         price: "$40",
//         carname: "Alto",
//         ac: "Yes",
//         fuel: "Petrol",
//         passenger: "4",
//     },
//     {
//         id: 7,
//         image: car7,
//         price: "$35",
//         carname: "Maruti Suzuki Dzire",
//         ac: "Yes",
//         fuel: "Petrol",
//         passenger: "4",
//     },
//     {
//         id: 8,
//         image: car8,
//         price: "$30",
//         carname: "Mercedes-Benz C-Class Coupe",
//         ac: "Yes",
//         fuel: "Diesel",
//         passenger: "4",
//     },
// ];


const CarsList = () => {
    const { carData}=useContext(Context);
    const [sortCriteria, setSortCriteria] = useState('');

    const handleSort = (e) => {
        setSortCriteria(e.target.value);
    };
    // console.log(sortCriteria);

    const sortedCars = [...carData].sort((a, b) => {
        if (sortCriteria === 'price') {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        } else if (sortCriteria === 'carname') {
            return a.carname.localeCompare(b.carname);
        } else if (sortCriteria === 'fuel') {
            return a.fuel.localeCompare(b.fuel);
        }
        else if (sortCriteria === 'passenger') {
            return a.passenger.localeCompare(b.passenger);
        }
        return 0;
    });

    return (
        <section className='mt-16 w-11/12 lg:w-4/5 mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='flex justify-center text-3xl font-semibold text-blue-700'>Our Car Listing</h1>
                <div className='flex items-center gap-2 justify-center md:justify-start'>
                    <label htmlFor="sort" className='flex items-center gap-2'>
                        <FaSortAmountUpAlt />
                        <p>Sort</p>
                    </label>
                    <select
                        id='sort'
                        value={sortCriteria}
                        onChange={handleSort}
                        className='mt-1 block w-1/2 md:w-1/5 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                        <option value="">Select</option>
                        <option value="price">Price</option>
                        <option value="carname">Car Name</option>
                        <option value="fuel">Fuel Type</option>
                        <option value="passenger">No of Passenger</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sortedCars.map(({ carname, image, passenger, ac, fuel, price ,id}) => (
                    <div key={id} className='border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
                        <div className='h-48'>
                            <img src={image} alt={carname} className='w-full h-full object-cover' />
                        </div>
                        <div className='p-4 flex flex-col items-center gap-2'>
                            <h1 className='text-xl font-semibold text-gray-800'>{carname}</h1>
                            <p className='text-lg text-blue-600'>{price}/day</p>
                            <div className='flex justify-between w-full gap-1 text-gray-600'>
                                <p>AC: {ac}</p>
                                <p>Fuel: {fuel}</p>
                                <p>Passenger: {passenger}</p>
                            </div>

                        </div>
                        <div className='px-4 pb-4 flex justify-center gap-2 mt-2'>
                            <button className='bg-blue-600 text-white py-1 px-3 rounded-md w-1/2'>Rent</button>
                            <Link to={`/car-details/${id}`} className='text-blue-600 border border-blue-600 py-1 px-3 rounded-md w-1/2 text-center'>Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CarsList;
