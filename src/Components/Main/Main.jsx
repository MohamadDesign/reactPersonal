import React from "react";
import "./Main.css";
import aosCall from "../AOS/AOS";

export default function Main() {
  aosCall();
  return (
    <>
      <div
        className="main-banner"
        id="top"
        data-aos="fade-in"
        data-aos-duration="700"
        data-aos-delay="700"
        data-aos-easing="linear"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="1500"
                    data-aos-easing="linear"
                  >
                    <h6>Welcome to Space Dynamic</h6>
                    <h2>
                      We Make <em>Digital Ideas</em> &amp; <span>SEO</span>{" "}
                      Marketing
                    </h2>
                    <p>
                      Space Dynamic is a professional looking HTML template
                      using a Bootstrap 5 (beta 2). This CSS template is free
                      for you provided by{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/1"
                        target="_parent"
                      >
                        TemplateMo
                      </a>
                      .
                    </p>
                    <form id="search" action="#" method="GET">
                      <fieldset>
                        <input
                          type="address"
                          name="address"
                          className="email"
                          placeholder="Your website URL..."
                          autoComplete="on"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <button type="submit" className="main-button">
                          Analyze Site
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image"
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay="900"
                    data-aos-easing="linear"
                  >
                    <img
                      src="/images/banner-right-image.png"
                      alt="team meeting"
                    />
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
