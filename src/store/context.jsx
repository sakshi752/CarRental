import { createContext, useState } from "react";
import car1 from '../Components/images/carModels/banner1.png';
import car2 from '../Components/images/carModels/banner2.png';
import car3 from '../Components/images/carModels/banner3.png';
import car4 from '../Components/images/carModels/banner4.png';
import car5 from '../Components/images/carModels/banner5.png';
import car6 from '../Components/images/carModels/banner6.png';
import car7 from '../Components/images/carModels/banner7.png';
import car8 from '../Components/images/carModels/banner8.png';
import img02 from '../Components/images/blogs/blog-2.jpg';
import img03 from '../Components/images/blogs/blog-3.jpg';
import img01 from '../Components/images/blogs/blog-1.jpg';

export const Context = createContext({});

const ContextProvider = (({ children }) => {

    // Responsive nav bar
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    // Change color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };


    const [carData, setCarData] = useState(
        [
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
    const [blogData, setBlogData] = useState([
        {
            id: 1,
            title: "The best way to drive cars",
            author: "Muhib",
            date: "12 Dec, 2020",
            time: "9pm",
            imgUrl: img01,
            description:
                " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
            quote:
                "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
        },

        {
            id: 2,
            title: "If your car battery is down",
            author: "Muhib",
            date: "12 Dec, 2020",
            time: "9pm",
            imgUrl: img02,
            description:
                " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
            quote:
                "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
        },

        {
            id: 3,
            title: "The best way to give trip",
            author: "Muhib",
            date: "12 Dec, 2020",
            time: "9pm",
            imgUrl: img03,
            description:
                " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
            quote:
                "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
        },
    ]);

    const [faqData, setFaqData] = useState([
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
    ]);

    // for faq
    const [activeIndex, setActiveIndex] = useState(null);
    const handleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <Context.Provider value={{
            carData,
            setCarData,
            blogData, setBlogData,
            faqData, setFaqData,
            activeIndex, handleFaq,
            navOpen,toggleNav,
            color,changeColor

        }}>
            {children}
        </Context.Provider>
    )
});

export default ContextProvider;