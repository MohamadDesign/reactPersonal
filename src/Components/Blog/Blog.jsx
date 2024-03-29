import React from "react";
import "./Blog.css";
export default function Blog() {
  return (
    <>
      <div id="blog" className="our-blog section">
        <div className="container">
          <div
            className="row"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="700"
            data-aos-easing="linear"
          >
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>
                  Check Out What Is <em>Trending</em> In Our Latest{" "}
                  <span>News</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-dec">
                <img src="/images/blog-dec.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="700"
            data-aos-easing="linear"
          >
            <div className="col-lg-6">
              <div className="left-image">
                <a href="#">
                  <img
                    src="/images/big-blog-thumb.jpg"
                    alt="Workspace Desktop"
                  />
                </a>
                <div className="info">
                  <div className="inner-content">
                    <ul>
                      <li>
                        <i className="fa fa-calendar"></i> 24 Mar 2021
                      </li>
                      <li>
                        <i className="fa fa-users"></i> TemplateMo
                      </li>
                      <li>
                        <i className="fa fa-folder"></i> Branding
                      </li>
                    </ul>
                    <a href="#">
                      <h4>SEO Agency &amp; Digital Marketing</h4>
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur and sed doer ket
                      eismod tempor incididunt ut labore et dolore magna...
                    </p>
                    <div className="main-blue-button">
                      <a href="#">Discover More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-list">
                <ul>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar"></i> 18 Mar 2021
                      </span>
                      <a href="#">
                        <h4>New Websites &amp; Backlinks</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amsecteturii and sed doer ket
                        eismod...
                      </p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/images/blog-thumb-01.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar"></i> 18 Mar 2021
                      </span>
                      <a href="#">
                        <h4>New Websites &amp; Backlinks</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amsecteturii and sed doer ket
                        eismod...
                      </p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/images/blog-thumb-01.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar"></i> 18 Mar 2021
                      </span>
                      <a href="#">
                        <h4>New Websites &amp; Backlinks</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amsecteturii and sed doer ket
                        eismod...
                      </p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/images/blog-thumb-01.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
