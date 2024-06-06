import { Outlet } from "react-router-dom"
import Header from "./Components/Header"

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Outlet/>
        <img className="h-96" src="public/red-sports-car-png-1.png" alt="" />
      </div>
    </>
  )
}

export default App
