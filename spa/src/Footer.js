import React from 'react'

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: "rgb(71, 111, 112)", padding: "1rem 0" }}>
            <div className="container text-white">
                <div className="foote">
                    <ul className="footer-cols" >
                        <h5>Address</h5>
                        <hr />
                        <li>ZZZZ Workspace</li>
                        <li>Street 43,building 4A</li>
                        <li>Industrial Area</li>
                        <li>Aqwertyu </li>
                        <li>Mumbai</li>
                    </ul>
                    <ul className="footer-cols" >
                        <h5>Clients</h5>
                        <hr />
                        <li>XYZ org</li>
                        <li>ABC org</li>
                        <li>IJK org</li>
                        <li>Qwerty Corp</li>
                        <li>ZAQ PVT</li>
                    </ul>
                    <ul className="footer-cols" >
                        <h5>Stack</h5>
                        <hr />
                        <li>HTML5,CSS,JS</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>NodeJS</li>
                        <li>Django</li>
                    </ul>
                    <ul className="footer-cols" >
                        <h5>About Being Geeky</h5>
                        <hr />
                        <li>About CEO</li>
                        <li>About Team</li>
                        <li>Location</li>
                        <li>Working Atmosphere</li>
                        <li>Contact Being Geeky</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
