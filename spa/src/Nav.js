import React from 'react'
import { NavLink } from "react-router-dom";
import './App.css'

export const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg inverse  fixed-top navbar-dark bg-dark">
                <div className="collapse navbar-collapse z" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className=" nav-link text-white " to={'/Showcase'}>Being Geeky</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/Tutorials'} className="nav-link text-white x">Tutorials</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/Video'} className="nav-link text-white x"> Video </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/Coupons'} className="nav-link text-white x"> Coupons</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
