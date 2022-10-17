import React from 'react'
import { useLocation, BrowserRouter, Routes, Router } from 'react-router-dom'
const UseLocation = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>


            {/* ...... only useing Routers....... */}


            <h1>Hellow world {location.pathname.remove("/", '')}</h1>

        </div>
    )
}

export default UseLocation
