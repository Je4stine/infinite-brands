import React from "react";
import { culture, gov, history, future } from "../../utils/media";
import "./City.css";

const City = () => {
  return (
    <section id="city" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Infinit Brands</h2>
            <hr className="my-4"/>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="mb-4">We are committed to developing a successful- business criteria through constant
              communication, proactive report and feedbacks. Building a strong client relationship is
              fundamental to our distinctive service.
              Our objective is to provide satisfactory professional services to our clients and provide an
              effective means of meeting their demands</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={culture} alt="City Culture Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Our mission</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Our Main Vision is to provide result-oriented services that shape consumer perception.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={gov} alt="Flag Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Our Vision</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">We see us becoming the leading company in offering customized and innovative marketing solutions in Kenya.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={history} alt="History Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Core values</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    Our Core Values as a company are;{"  "}
                    <br/>• Creativity
                    <br/>• Inclusivity
                    <br/> • Integrity
                    <br/>• Reliability
                    <br/>• Team work
                    <br/>• Quality service
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={future} alt="Future Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Objectives</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    1)
                    To increase sales and brand awareness of our clients’ products through weekly/monthly
                    activation and promotion activities.
                   <br/> 2)
                    Increase company profit margins, client sales volume, market share and growth by at
                    least 30% in one quarter.
                    <br/> 3)
                    Onboard at least two new clients every quarter through referrals, networking, strategic
                    partnerships and excellent customer service and experience.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <a className="js-scroll-trigger" href="#events">
                  <div className="timeline-image material">
                    <h4 className="font-weight-bold">Let's
                      <br/> Get
                      <br/>Creative!
                    </h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default City;