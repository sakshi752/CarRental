import { Scrollbars } from 'react-custom-scrollbars-2';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Scrollbars style={{ height: '100vh', width: "100%" }}>
        <div className='bg-gray-100 min-h-screen tracking-widest'>
          <Header />
          <div className=" px-3 sm:px-5 md:px-10 lg:px-16 py-4">
            <Outlet />
          </div>
          <Footer />
        </div>

      </Scrollbars>
    </>
  )
}

export default App;

