import React from "react";
import "./Header.css";
import aosCall from "../AOS/AOS";

export default function Header() {
  aosCall();
  return (
    <>
      <header
        className="header-area header-sticky"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav d-flex justify-content-between">
                <a
                  href="https://www.youtube.com/channel/UCCo_mRVm8QaxfvLN4rtkwQg"
                  className="logo"
                  target="_blank"
                >
                  <h4>
                    اتم<span> کدینگ</span>
                  </h4>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      خانه
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">درباره ما</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">خدمات</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#portfolio">شخصی</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#blog">بلاگ</a>
                  </li>
                  <li className="scroll-to-section">
                    {/* <div className="main-red-button">
                      <a href="#contact">ارسال پیام</a>
                    </div> */}
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
