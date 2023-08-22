import React from "react";
import "./About.css";
import aosCall from "../AOS/AOS";

export default function About() {
  aosCall();
  return (
    <>
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="left-image"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-easing="linear"
              >
                <img src="/images/about-left-image.png" alt="person graphic" />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="services">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="item"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="800"
                      data-aos-easing="linear"
                    >
                      <div className="icon">
                        <img
                          src="/images/service-icon-01.png"
                          alt="reporting"
                        />
                      </div>
                      <div className="right-text">
                        <h4>پر تلاش</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="1000"
                      data-aos-easing="linear"
                    >
                      <div className="icon">
                        <img
                          src="/images/service-icon-01.png"
                          alt="reporting"
                        />
                      </div>
                      <div className="right-text">
                        <h4>پر تلاش</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="1200"
                      data-aos-easing="linear"
                    >
                      <div className="icon">
                        <img
                          src="/images/service-icon-01.png"
                          alt="reporting"
                        />
                      </div>
                      <div className="right-text">
                        <h4>پر تلاش</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="1500"
                      data-aos-easing="linear"
                    >
                      <div className="icon">
                        <img
                          src="/images/service-icon-01.png"
                          alt="reporting"
                        />
                      </div>
                      <div className="right-text">
                        <h4>پر تلاش</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
