import React from 'react'
import { NavLink } from "react-router-dom";
export const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <NavLink className=" nav-link text-white " to={'/Showcase'}>Being Geeky</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Tutorials'} className="nav-link text-white">Tutorials</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Video'} className="nav-link text-white"> Video </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Coupons'} className="nav-link text-white"> Coupons</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
