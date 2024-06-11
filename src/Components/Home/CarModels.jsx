import React, { useState } from 'react';
import carModel1 from "../images/banner1.png";
import carModel2 from "../images/banner2.png";
// import carModel3 from "../images/banner3.png";

const carData = {
  "Audi A1 S-Line": {
    image: carModel1,
    price: "$35",
    model: "A1 S-Line",
    mark: "Audi",
    year: "2018",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  "VW Golf 6": {
    image: carModel2,
    price: "$30",
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2015",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  "Toyota Camry": {
    image: carModel1,
    price: "$40",
    model: "Camry",
    mark: "Toyota",
    year: "2017",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  "car4": {
    image: carModel1,
    price: "$35",
    model: "A1 S-Line",
    mark: "Audi",
    year: "2018",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  "car5": {
    image: carModel2,
    price: "$30",
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2015",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  "car6": {
    image: carModel1,
    price: "$40",
    model: "Camry",
    mark: "Toyota",
    year: "2017",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
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
      <div className='w-full mt-[3%] flex justify-between flex-col md:flex-row gap-32'>
        <div className='w-1/3'>
          <ul className='flex flex-col gap-4 rounded'>
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
        <div className='w-2/3'>
          <img src={car.image} alt={selectedCar} className='object-contain w-full h-80' />
        </div>
        <div className='w-1/3'>
          <div className='bg-blue-950 text-white py-3 px-2 rounded flex items-center justify-center gap-4'>
            <p className='text-lg font-semibold'>{car.price}</p>
            <p className='text-md font-semibold'>rent per day</p>
          </div>
          <div className=''>
            <h1 className=''>Model: {car.model}</h1>
            <ul className=''>
              <li>Mark: {car.mark}</li>
              <li>Year: {car.year}</li>
              <li>Doors: {car.doors}</li>
              <li>AC: {car.ac}</li>
              <li>Transmission: {car.transmission}</li>
              <li>Fuel: {car.fuel}</li>
            </ul>
          </div>
          <button className='bg-blue-950 text-white py-2 px-4 rounded-md'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarModels;
