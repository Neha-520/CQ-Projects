import React from 'react'
import './App.css'

export const Tutorials = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgb(71, 111, 112)" }} id="tutorial" className="section">
                <div className="container text-white"><h2 className="section-head p-4"><i className="fas fa-music"></i> Documentation</h2>
                    <h3>All genuine Documentation at one place</h3>
                    <p className="lead"> Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                    <button className="btn-outline text-white" style={{ height: "50px", width: "200px", backgroundColor: "#103063" }}>Start Your Trial Now</button><br /><br /><br />
                    <p className="text-light"> You can download Being Geeky from app store or playstore.</p>
                    <img style={{ borderRadius: "10px" }} width="80%" height="50%" src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/ipad-app-mockup-03.png" alt="" />
                </div>
            </div>
        </>
    )
}
