import React from "react";
import "./Main.css";
import aosCall from "../AOS/AOS";
import Typewriter from "typewriter-effect";
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
                    <h6>به وبسایت اتم کدینگ خوش آمدید.</h6>
                    <h2>
                      <Typewriter
                        onInit={(typeWriter) => {
                          typeWriter
                            .pauseFor(2000)
                            .typeString("سلام، محمد ابراهیمی هستم.")
                            .start()
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(`<em>توسعه دهنده فرانت اند.</em>`)
                            .start()
                            .pauseFor(2000);
                        }}
                        options={{
                          loop: true,
                        }}
                      />
                    </h2>
                    <div className="main-red-button mt-3">
                      <a href="#contact">ارسال پیام</a>
                    </div>
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
