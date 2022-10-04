import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <hr className="my-4"/>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="mb-4">We are committed to developing a successful- business criteria through constant
              communication, proactive report and feedbacks. Building a strong client relationship is
              fundamental to our distinctive service.</p>
            {/* Vimeo Video */}
            {/* <div className="embed-responsive embed-responsive-16by9 mb-5 material rounded border border-top-0 border-bottom-0 border-warning">
              <iframe 
                className="embed-responsive-item"
                title="Thriving Cities"
                src="https://player.vimeo.com/video/135908974"
                width="640" height="360" frameBorder="0"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>      */}
            <a className="btn btn-yellow btn-xl text-uppercase js-scroll-trigger material" href="#contact">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;