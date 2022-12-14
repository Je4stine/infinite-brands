import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <hr className="my-4" />
            <p className="mb-5">Infinit Brands is for all of the stakeholders working on and for the common good upcoming and established brands. For more information or to discuss this further, please do not hesitate to contact us.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mx-auto text-center">
            <a href="infinitbrands@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope fa-3x contact-icon mb-3" title="Mail"></i>
            </a>
          </div>
          <div className="col-4 mx-auto text-center">
            <a href="https://www.facebook.com/infinitbrands" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-3x contact-icon mb-3" title="Facebook"></i>
            </a>
          </div>
          <div className="col-4 mx-auto text-center">
            <a href="https://twitter.com/infinit_brands" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-3x contact-icon mb-3" title="Twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;