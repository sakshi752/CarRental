import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cars from "./pages/Cars.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import CarDetails from './pages/CarDetails.jsx';
import ContextProvider from './store/context.jsx';
import BlogDetails from './pages/BlogDetails.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/cars", element: <Cars /> },
      { path: "/car-details/:id", element: <CarDetails /> },
      { path: "/blogs", element: <Blogs /> },
      {path:"/blog-details/:id",element:<BlogDetails/>},
      { path: "/contact", element: <Contact /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
