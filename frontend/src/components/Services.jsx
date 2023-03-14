import React from "react";
import service1 from "../assets/CRM.png";
import service2 from "../assets/erp.png";
import service3 from "../assets/App_development.png";
import service4 from "../assets/service-icons/service4.png";
import service5 from "../assets/service-icons/service5.png";
import service6 from "../assets/service-icons/service6.png";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="section services" id="ser">
        <div className="container">
          {/* <div className="small-header">What We Do</div> */}
          <div className="inner-container">
            <div className="main-header">
              <h2>Our Services</h2>
            </div>
            <div className="services-outer">
              <div className="services-inner">
                <div className="service-col">
                  <div className="service">
                    <a href="websites.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service1} alt="Websites" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Websites</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="graphic-design.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service2} alt="Graphic Design" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Graphic Design</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="marketing.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service3} alt="Marketing" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Online Marketing</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="mobile-apps.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service4} alt="Mobile Apps" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Mobile Apps</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="social-media.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service5} alt="Social Media" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Social Media</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="e-commerce-solution.aspx" className="service-data">
                      <div className="service-img">
                        <img src={service6} alt="E-Commerce Solution" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>E-Commerce Solution</h3>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi impedit voluptatibus perferendis ipsam
                          nihil, hic quaerat harum quas distinctio beatae.
                        </p>
                        <div class="service-btn">
                          <p>Read More</p>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
