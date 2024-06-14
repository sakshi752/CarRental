import { createContext, useState } from "react";
import car1 from '../Components/images/carModels/banner1.png';
import car2 from '../Components/images/carModels/banner2.png';
import car3 from '../Components/images/carModels/banner3.png';
import car4 from '../Components/images/carModels/banner4.png';
import car5 from '../Components/images/carModels/banner5.png';
import car6 from '../Components/images/carModels/banner6.png';
import car7 from '../Components/images/carModels/banner7.png';
import car8 from '../Components/images/carModels/banner8.png';
export const Context = createContext({});

const ContextProvider = (({ children }) => {
    const [carData, setCarData] = useState([
        {
            id: 1,
            image: car1,
            price: "$35",
            carname: "Audi A1 S-Line",
            ac: "Yes",
            fuel: "Petrol",
            passenger: "4",
            description: "The Audi A1 S-Line is a stylish and compact car, perfect for city driving with its sleek design and comfortable interior. It features a petrol engine and air conditioning, making it a great choice for a comfortable ride."
        },
        {
            id: 2,
            image: car2,
            price: "$30",
            carname: "VW Golf 6",
            ac: "Yes",
            fuel: "Diesel",
            passenger: "4",
            description: "The VW Golf 6 is a reliable and fuel-efficient diesel car. It offers a smooth driving experience and is equipped with air conditioning. Ideal for both city and highway driving."
        },
        {
            id: 3,
            image: car3,
            price: "$40",
            carname: "Toyota Camry",
            ac: "Yes",
            fuel: "Petrol",
            passenger: "4",
            description: "The Toyota Camry is a spacious and comfortable car, perfect for long drives. It features a powerful petrol engine, air conditioning, and ample space for passengers and luggage."
        },
        {
            id: 4,
            image: car4,
            price: "$35",
            carname: "Swift",
            ac: "Yes",
            fuel: "Petrol",
            passenger: "4",
            description: "The Swift is a compact and nimble car, ideal for navigating through city traffic. It comes with a petrol engine, air conditioning, and a comfortable interior for a pleasant driving experience."
        },
        {
            id: 5,
            image: car5,
            price: "$30",
            carname: "Jeep Avenger",
            ac: "Yes",
            fuel: "Diesel",
            passenger: "5",
            description: "The Jeep Avenger is a robust and spacious car, perfect for off-road adventures and family trips. It features a diesel engine, air conditioning, and can accommodate up to 5 passengers comfortably."
        },
        {
            id: 6,
            image: car6,
            price: "$40",
            carname: "Alto",
            ac: "Yes",
            fuel: "Petrol",
            passenger: "4",
            description: "The Alto is a compact car with excellent fuel efficiency and a petrol engine. It is equipped with air conditioning and provides a comfortable ride for up to 4 passengers."
        },
        {
            id: 7,
            image: car7,
            price: "$35",
            carname: "Maruti Suzuki Dzire",
            ac: "Yes",
            fuel: "Petrol",
            passenger: "4",
            description: "The Maruti Suzuki Dzire is a stylish and reliable car, featuring a petrol engine and air conditioning. It offers a smooth driving experience and is perfect for both city and long-distance travel."
        },
        {
            id: 8,
            image: car8,
            price: "$30",
            carname: "Mercedes-Benz C-Class Coupe",
            ac: "Yes",
            fuel: "Diesel",
            passenger: "4",
            description: "The Mercedes-Benz C-Class Coupe is a luxury car that combines performance and elegance. It features a diesel engine, air conditioning, and a high-end interior, providing a premium driving experience."
        }
    ]
    );

    return (
        <Context.Provider value={{
            carData,
            setCarData
        }}>
            {children}
        </Context.Provider>
    )
});

export default ContextProvider;