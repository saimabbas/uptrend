import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/talktous.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Header from "../components/Header";
import companyLogo1 from "../assets/img/logo-samsung.svg";
import companyLogo2 from "../assets/img/logo-swissborg.svg";
import companyLogo3 from "../assets/img/logo-binance.svg";
import companyLogo4 from "../assets/img/logo-cointelegraphy.svg";
import companyLogo5 from "../assets/img/logo-kardiachain.svg";
import companyLogo6 from "../assets/img/logo-vechain.svg";
import companyLogo7 from "../assets/img/logo-kusama.svg";
import PlatformStatsImg from "../assets/img/platform-stats-img.svg";
import companyLogo8 from "../assets/img/logo-compound.svg";
import companyLogo9 from "../assets/img/logo-celsius.svg";
import companyLogo10 from "../assets/img/logo-ford.svg";
import companyLogo11 from "../assets/img/logo-citibank.svg";
import companyLogo12 from "../assets/img/logo-oracle.svg";
import EventMarketingImg from "../assets/img/EM-img.png";
import EventMarketingImgMob from "../assets/img/event-img-1.png";
// Icons
import {
  MdArrowDownward,
  MdArrowUpward,
  MdArrowForward,
  MdRemove,
  MdAdd,
} from "react-icons/md";
import Footer from "../components/Footer";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
import FuelBrandGrowthSwiper from "../components/FuelBrandGrowthSwiper";

const TalkToUs = () => {
  return (
    <main className="app">
      <div className="talktous-page">
        <div className="ttu-header">
          <div className="box">
            <Header lightHeader={false} />
          </div>
        </div>
        <section className="ttu-hero-section">
          <div className="w50-dark">
            <div className="box">
              <div className="w50-dark-content">
                <h2>Ready To Start A New Uptrend? </h2>
                <h6>
                  We implement innovations to build iconic brands. Our approach
                  is grounded in research, strategy, and transparency
                </h6>
                <div className={"good-company"}>
                  <div className="gc-bottom">
                    <h4>You are in good company</h4>
                    <div className={"good-company-grid"}>
                      <img src={companyLogo1} alt="" />
                      <img src={companyLogo2} alt="" />
                      <img src={companyLogo3} alt="" />
                      <img src={companyLogo9} alt="" />
                      <img src={companyLogo10} alt="" />
                      <img src={companyLogo11} alt="" />
                      <img src={companyLogo12} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w50-light">
            <div className="box">
              <div className="w50-light-content">
                <h2>LET'S TALK!</h2>

                <div className="ttu-form-grid">
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Company Email"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Telegram or Whatsapp"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Website"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="How can we lend a helping hand?"
                  />
                </div>
                <button className="ut-btn-green">SEND</button>
              </div>
            </div>
          </div>
        </section>
        <section className="platform-stats-section">
          <div className="box box-p">
            <div className="platform-stats-grid">
              <div className="platform-stats-details">
                <h6>Proof of Work</h6>
                <h3>#1 ONLINE EDUCATIONAL</h3>
                <h4>PLATFORM IN EUROPE</h4>x{" "}
                <h5>Growth Unlocked - Performance Guaranteed</h5>
                <p>
                  By seamlessly integrating with Uptrend, our partner achieved
                  unprecedented growth with influencer marketing service
                </p>
              </div>
              <div className="platform-stats-img">
                <img
                  loading="lazy"
                  src={PlatformStatsImg}
                  alt="PlatformStatsImg"
                />
              </div>
            </div>
            <div className="platform-stats-text-grid">
              <div className="ps-box ps-box-1">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span>%
                  </h3>
                  <p>Growth In New User Sign-Ups</p>
                </div>
              </div>
              <div className="ps-box ps-box-2">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span> %
                  </h3>
                  <p>LTV Increase</p>
                </div>
              </div>
              <div className="ps-box ps-box-3">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span>
                  </h3>
                  <p>Campaign Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Event-marketing-section ">
          <div className="box">
            <FuelBrandGrowthSwiper backedByLight={true} />
          </div>
        </section>
        <section className="subs-journal-section">
          <div className="box">
            <div className="subs-journal-grid">
              <div className="sj-grid-left">
                <h3>
                  Get an exclusive marketing digest from industry growth experts
                </h3>
                <div className="sj-input-box">
                  <input type="text" placeholder="Email" />
                  <button>
                    <div></div>
                    SUBSCRIBE TO OUR JOURNAL
                  </button>
                </div>
              </div>
              <div className="sj-bull-elevator-img-box">
                <img
                  loading="lazy"
                  src={BullElevatorImg2}
                  alt="BullElevatorImg"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default TalkToUs;
