import React from 'react'
import { BrowserRouter } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import MyApp from "./AllProjects/MyApp"
import "./App.css"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="row">
                    <MyApp />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
