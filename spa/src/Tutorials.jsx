import React from 'react'
import './App.css'

export const Tutorials = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgb(71, 111, 112)" }} id="tutorial" className="section">
                <div className="container text-white"><h2 className="section-head p-4"><i className="fas fa-music"></i> Documentation</h2>
                    <h3>All genuine Documentation at one place</h3>
                    <p className="lead"> Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                    <a href="#" className="btn btn-secondary mb">Start Your Trial Now</a>
                    <p className="text-light"> You can download Being Geeky from app store or playstore.</p>
                    <img style={{ borderRadius: "10px" }} width="80%" height="50%" src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/ipad-app-mockup-03.png" alt="" />
                </div>
            </div>

            <section id="video" className="section bg-light"><div className="container">
                <h3 className="p-4 m-5">The video lecture you shouldn't miss</h3>
                <p className="lead"> With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p>
                <a href="#" className="btn btn-secondary">Read More</a><br /><br />
                <img style={{ borderRadius: "5px" }} width="90%" src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/lecture.jpg" alt="" />
            </div>
            </section>

            <section style={{ backgroundColor: "rgb(71, 111, 112)" }} id="entertainment" className="section">
                <div className="container">
                    <h3>Lectures available anywhere anytime.<a href="mailto:"></a></h3>
                    <p className="lead"> You can watch the lecture anytime from anywhere and ask doubts.The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                </div>
            </section>
        </>
    )
}
