import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderNavBar = () => {
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <b>React Developer</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/Dashboard">
                                        <a className="nav-link">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">Dashboard</button>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/home">
                                        <a className="nav-link">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">Home</button>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/aboutus">
                                        <a className="nav-link">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">About us</button>
                                        </a>
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/services">
                                        <a className="nav-link " href="">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">Contact</button>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/hooks">
                                        <a className="nav-link">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">Hooks</button>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signup">
                                        <a className="nav-link">
                                            <button className="btn btn-outline-warning btn-sm" type="submit">SignUp </button>
                                        </a>
                                    </NavLink>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default HeaderNavBar
