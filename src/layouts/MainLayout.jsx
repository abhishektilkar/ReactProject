// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar"
// import HomePage from "../pages/HomePage"

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
};

export default MainLayout;
