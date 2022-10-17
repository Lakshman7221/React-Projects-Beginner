import React from 'react'
import { NavLink } from 'react-router-dom'
const LeftSideMenu = () => {
    return (
        <>
            <section className='mx-5'>
                <NavLink to="/incdec">
                    <a className="nav-link">
                        <button className="btn btn-outline-light btn-sm mt-3" >Increment & Decrement</button>
                    </a>
                </NavLink>
                <NavLink to="/toggle">
                    <a className="nav-link my-3">
                        <button className="btn btn-outline-light btn-sm" >Toggle</button>
                    </a>
                </NavLink>
                <NavLink to="/login">
                    <a className="nav-link my-3">
                        <button className="btn btn-outline-light btn-sm">Login</button>
                    </a>
                </NavLink>
                <NavLink to="/updatedata">
                    <a className="nav-link my-3" >
                        <button className="btn btn-outline-light btn-sm">Update Data</button>
                    </a>
                </NavLink>
                <NavLink to="/calculator">
                    <a className="nav-link my-3" >
                        <button className="btn btn-outline-light btn-sm" >Calclator</button>
                    </a>
                </NavLink>
                <NavLink to="/displayArrayData">
                    <a className="nav-link my-3">
                        <button className="btn btn-outline-light btn-sm">Display Array Data</button>
                    </a>
                </NavLink>
            </section>
        </>
    )
}

export default LeftSideMenu
