import './App.css';
import React from 'react'
import BackgroundImage from './Components/BackgroundImage';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <BackgroundImage />
    <Header />
    <Banner />
    </>,
  },
  {
    path: "/projects",
    element:
    <>
    <BackgroundImage />
    <Header />
    <Projects />
    </>,
  },
  {
    path: "/contact",
    element:
    <>
    <BackgroundImage  />
    <Header />
    <Contact />
    </>
  },
]);

const App = () => {
  
  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App