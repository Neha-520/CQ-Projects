import React from 'react'
import './App.css'

export const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg inverse  fixed-top navbar-dark bg-dark">
                <div className="collapse navbar-collapse z" id="navbarSupportedContent">
                    <a className="nav-link active text-white" aria-current="page" href="#geeky">Being Geeky</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#Tutorial">Tutorials</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#Video">Video</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#Coupon">Coupons</a>
                        </li>
                    </ul>
                </div>
                <div className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#Tutorial">Tutorials</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#Video">Video</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#Coupon">Coupons</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </nav>
        </>
    )
}
