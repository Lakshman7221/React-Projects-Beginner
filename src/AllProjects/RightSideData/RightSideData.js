import React from 'react'
import { Routes, Route } from "react-router-dom"
import DashBoard from "../Header/Pages/DashBoard"
import Home from "../Header/Pages/Home"
import Services from "../Header/Pages/Services"
import AboutUs from "../Header/Pages/AboutUs"
import SignUp from "../Header/Pages/SignUp"
import Hooks from "../Header/Pages/Hooks"
import IncDec from "../LeftSideMenu/IncDec"
import Toggle from "../LeftSideMenu/Toggle"
import Login from "../LeftSideMenu/Login"
import Calculator from "../LeftSideMenu/Calclator"
import UpDateData from "../LeftSideMenu/UpdateData"
import DisplayArrayData from "../LeftSideMenu/DisplayArraData"
const SideNavBar = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/Dashboard" element={<DashBoard />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/services" element={<Services />}></Route>
                <Route exact path="/aboutus" element={<AboutUs />}></Route>
                <Route exact path="/hooks" element={<Hooks />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>
                <Route exact path="/incdec" element={<IncDec />}></Route>
                <Route exact path="/toggle" element={<Toggle />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/calculator" element={<Calculator />}></Route>
                <Route exact path="/updatedata" element={<UpDateData />}></Route>
                <Route exact path="/displayArrayData" element={<DisplayArrayData />}></Route>
            </Routes>
        </div>
    )
}

export default SideNavBar
