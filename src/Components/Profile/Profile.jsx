import React from "react";
import "./Profile.css";
export default function Profile() {
  return (
    <>
      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay="1000"
                data-aos-anchor-placement="top-center"
              >
                <h2>
                  See What Our Agency <em>Offers</em> &amp; What We{" "}
                  <span>Provide</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                >
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="/images/portfolio-image.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                  data-aos-delay="1700"
                >
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="/images/portfolio-image.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                >
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="/images/portfolio-image.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                  data-aos-delay="2200"
                >
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="/images/portfolio-image.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
