import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cars from "./pages/Cars.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";


const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/cars",element:<Cars/>},
      {path:"/blogs",element:<Blogs/>},
      {path:"/contact",element:<Contact/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
