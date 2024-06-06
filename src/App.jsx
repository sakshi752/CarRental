import { Scrollbars } from 'react-custom-scrollbars-2';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Scrollbars style={{ height: '100vh',width:"100%" }}>
        <div className="bg-gray-100 min-h-screen sm:px-5 md:px-10 lg:px-16 py-4">
          <Header />
          <Outlet />
        </div>
      </Scrollbars>
    </>
  )
}

export default App;

