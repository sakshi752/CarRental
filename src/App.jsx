import { Scrollbars } from 'react-custom-scrollbars-2';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

function App() {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(255, 0, 0, 0.3)', // Red color with 70% opacity
      borderRadius: '6px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <>
      <Scrollbars
        style={{ height: '100vh', width: "100%" }}
        renderThumbVertical={renderThumb}
        renderThumbHorizontal={renderThumb}
      >
        <div className='bg-gray-100 min-h-screen tracking-widest'>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </Scrollbars>
    </>
  );
}

export default App;
