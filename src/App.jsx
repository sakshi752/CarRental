import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
        <div className='bg-blue-50 min-h-screen tracking-widest'>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>

    </>
  );
}

export default App;
