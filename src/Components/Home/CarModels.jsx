import React, { useState } from 'react';
import carModel1 from "../images/carModels/banner1.png";
import carModel2 from "../images/carModels/banner2.png";
import carModel3 from "../images/carModels/banner3.png";
import carModel4 from "../images/carModels/banner4.png";
import carModel5 from "../images/carModels/banner5.png";
import carModel6 from "../images/carModels/banner6.png";
// import carModel3 from "../images/banner3.png";

const carData = {
  "Audi A1 S-Line": {
    image: carModel1,
    price: "$35",
    carname: "Audi A1 S-Line",
    ac: "Yes",
    fuel: "Petrol",
    passenger: "4/5",
  },
  "VW Golf 6": {
    image: carModel2,
    price: "$30",
    carname: "VW Golf 6",
    ac: "Yes",
    fuel: "Diesel",
    passenger: "4/5",
  },
  "Toyota Camry": {
    image: carModel3,
    price: "$40",
    carname: "Toyota Camry",
    ac: "Yes",
    fuel: "Petrol",
    passenger: "4/5",
  },
  "Car 4": {
    image: carModel4,
    price: "$35",
    carname: "Car 4",
    ac: "Yes",
    fuel: "Petrol",
    passenger: "4/5",
  },
  "Car 5": {
    image: carModel5,
    price: "$30",
    carname: "Car 5",
    ac: "Yes",
    fuel: "Diesel",
    passenger: "4/5",
  },
  "Car 6": {
    image: carModel6,
    price: "$40",
    carname: "Car 6",
    ac: "Yes",
    fuel: "Petrol",
    passenger: "4/5",
  },
};

const CarModels = () => {
  const [selectedCar, setSelectedCar] = useState("Audi A1 S-Line");
  const [car, setCar] = useState(carData[selectedCar]);

  const handleCarSelection = (carModel) => {
    setSelectedCar(carModel);
    setCar(carData[carModel]);
  };

  return (
    <div className='mt-[16%] sm:mt-[10%] md:mt-[6%] w-[93%] lg:w-[80%] mx-auto flex flex-col items-center gap-1'>
      <p className='text-xl font-semibold'>Vehicle Models</p>
      <h1 className='text-2xl font-bold text-blue-950'>Our rental fleet</h1>
      <p className='text-md text-center text-gray-600'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

      <div className='w-full mt-[3%] flex flex-col md:flex-row justify-between gap-0 md:gap-12 '>
        <div className='w-full md:w-1/4 border-2 md:border-none'>
          <ul className='flex flex-col gap-4'>
            {Object.keys(carData).map((carModel) => (
              <li
                key={carModel}
                className={`cursor-pointer ${selectedCar === carModel ? 'text-white bg-blue-950 rounded' : 'hover:text-white hover:bg-blue-950 rounded'} text-lg font-semibold px-4 py-2 transition-all duration-200`}
                onClick={() => handleCarSelection(carModel)}
              >
                {carModel}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={car.image} alt={selectedCar} className='object-contain w-[90%] md:w-[90%] h-80' />
        </div>
        <div className='w-full md:w-1/4 flex flex-col items-center justify-center md:items-end gap-4 border-2 md:border-none'>
          <div className='bg-blue-950 w-full text-white py-3 px-2 rounded flex items-center justify-center gap-4'>
            <p className='text-lg font-semibold'>{car.price}</p>
            <p className='text-md font-semibold'>rent per day</p>
          </div>
          <div className='w-full'>
            <ul className='flex flex-col'>
              <li className='text-lg font-semibold  py-2'>Car Name: {car.carname}</li>
              <li className='text-lg font-semibold  py-2'>AC: {car.ac}</li>
              <li className='text-lg font-semibold  py-2'>Fuel: {car.fuel}</li>
              <li className='text-lg font-semibold  py-2'>Passenger: {car.passenger}</li>
            </ul>
          </div>
          <button className='bg-blue-950 w-full text-white py-2 px-4 rounded-md'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarModels;
