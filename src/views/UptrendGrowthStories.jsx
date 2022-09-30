import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import ImHeroImg from "../assets/img/utgs-hero-img.svg";
import WinnertrophyImg from "../assets/img/winner-trophy.png";
import SpeakerImg from "../assets/img/speaker-img-orange.png";
import PlatformLogo1 from "../assets/icons/twitch-logo-2.svg";
import PlatformLogo2 from "../assets/icons/twitter-logo-2.svg";
import PlatformLogo3 from "../assets/icons/youtube-logo-2.svg";
import PlatformLogo4 from "../assets/icons/snapchat-logo-2.svg";
import PlatformLogo5 from "../assets/icons/weibo-logo-2.svg";
import PlatformLogo6 from "../assets/icons/linkedin-logo-2.svg";
import PlatformLogo7 from "../assets/icons/tiktok-logo-2.svg";
import PlatformLogo8 from "../assets/icons/instagram-logo-2.svg";
import PlatformLogo9 from "../assets/icons/facebook-logo-2.svg";
import PlatformLogo10 from "../assets/icons/wechat-logo-2.svg";
import PlatformLogo11 from "../assets/icons/kakaotalk-logo-2.svg";
import UTPartners from "../assets/img/ut-partners-img-red.png";
import IndustriesPlanetImg from "../assets/img/industries-planet.png";
import CrossPolinationImg from "../assets/img/cross-polination.png";
import CPBeeImg from "../assets/img/cp-bee-img.png";
import PlatformStatsImg1 from "../assets/img/platform-stats-img.svg";
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import FashionBrandImg from "../assets/img/fashion-brand-img.svg";
import PlatformStatsImg2 from "../assets/img/top-10-gaming-app.png";
import PlatformStatsImg3 from "../assets/img/leading-health-app.png";
import BigThingsWave from "../assets/img/big-things-wave.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img-2.png";
import Nico from "../assets/img/nico.png";
import Tony from "../assets/img/tony.png";
import Danny from "../assets/img/danny.svg";
import companyLogo16 from "../assets/img/logo-kephi.svg";
import companyLogo17 from "../assets/img/logo-bitcoinist.svg";
import companyLogo18 from "../assets/img/logo-tct.svg";

// Icons
import {
  MdArrowDownward,
  MdArrowUpward,
  MdArrowForward,
  MdRemove,
  MdAdd,
} from "react-icons/md";

// Components
import Header from "../components/Header";
import TrustedByCompanies from "../components/TrustedByCompanies";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";
import GreenWaveHeadingSection from "../components/GreenWaveHeadingSection";
import { gsap } from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import UTLogo from "../assets/icons/UTLogo";
import $ from "jquery";

const UptrendGrowthStories = () => {
  return (
    <main className="app">
      <div className="ut-growth-stories-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Uptrend Growth Stories</h1>
                <h3>Results-driven performance by proven experts</h3>
              </div>
              <div className="im-hero-explore">
                <a href="#service-description">
                  <span>explore</span>
                  <MdArrowDownward />
                </a>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="im-hero-img"
            src={ImHeroImg}
            alt="ImHeroImg"
          />
        </section>
        <div className="ugs-pss-container">
          <section className="platform-stats-section ugs-pss-1">
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
                    src={PlatformStatsImg1}
                    alt="PlatformStatsImg"
                  />
                </div>
              </div>
              <div className="platform-stats-text-grid">
                <div className="ps-box ps-box-1">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>690</span>%
                    </h3>
                    <p>Growth In New User Sign-Ups</p>
                  </div>
                </div>
                <div className="ps-box ps-box-2">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>64 </span> %
                    </h3>
                    <p>LTV Increase</p>
                  </div>
                </div>
                <div className="ps-box ps-box-3">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>14 320 344</span>
                    </h3>
                    <p>Campaign Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="platform-stats-section ugs-pss-2">
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
                    src={PlatformStatsImg2}
                    alt="PlatformStatsImg"
                  />
                </div>
              </div>
              <div className="platform-stats-text-grid">
                <div className="ps-box ps-box-1">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>418</span>%
                    </h3>
                    <p>Growth In New User Sign-Ups</p>
                  </div>
                </div>
                <div className="ps-box ps-box-2">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>224</span> %
                    </h3>
                    <p>LTV Increase</p>
                  </div>
                </div>
                <div className="ps-box ps-box-3">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>29</span>
                    </h3>
                    <p>Campaign Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="platform-stats-section ugs-pss-3">
            <img
              className="fashion-brand-img"
              src={FashionBrandImg}
              alt="FashionBrandImg"
            />

            <div className="box">
              <div className="platform-stats-grid fashion-brand-grid">
                <div className="platform-stats-details">
                  <h6>Proof of Work</h6>
                  <h3>FORTUNE-500 FASHION BRAND </h3>
                  <h4></h4> {/* Don't remove this h4. This is for margin */}
                  <h5>Iconic Brands Are Betting Big On The Metaverse </h5>
                  <p>
                    We've tapped into the incredible potential of the Metaverse.
                    The brand fashion event organized by Uptrend attracted an
                    audience of 19,400 visitors.
                  </p>
                </div>
                <div className="platform-stats-img fashion-brand-img-box">
                  <img src={FashionBrandImg} alt="FashionBrandImg" />
                </div>
              </div>
              <div className="platform-stats-text-grid">
                <div className="ps-box ps-box-1">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span> 217</span> %
                    </h3>
                    <p>Brand Mentions</p>
                  </div>
                </div>
                <div className="ps-box ps-box-2">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>19 400 </span>
                    </h3>
                    <p>Metaverse Event Attendees</p>
                  </div>
                </div>
                <div className="ps-box ps-box-3">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>83 </span> %
                    </h3>
                    <p>Organic Traffic</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="platform-stats-section ugs-pss-4">
            <div className="box">
              <div className="platform-stats-grid">
                <div className="platform-stats-details">
                  <h6>Proof of Work</h6>
                  <h3>LOCAL TECH STARTUP</h3>
                  <h4></h4> {/* Don't remove this h4. This is for margin */}
                  <h5>Delivering results-driven event marketing success</h5>
                  <p>
                    We helped a local tech startup boost revenue by 64% annually
                  </p>
                </div>
                <div className="platform-stats-img">
                  <img
                    loading="lazy"
                    src={LocalStartupImg}
                    alt="LocalStartupImg"
                  />
                </div>
              </div>
              <div className="platform-stats-text-grid">
                <div className="ps-box ps-box-1">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>2.3</span> X
                    </h3>
                    <p>ROAs</p>
                  </div>
                </div>
                <div className="ps-box ps-box-2">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>64</span> %
                    </h3>
                    <p>Revenue Growth</p>
                  </div>
                </div>
                <div className="ps-box ps-box-3">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>448</span> %
                    </h3>
                    <p>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="platform-stats-section ugs-pss-5">
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
                    src={PlatformStatsImg3}
                    alt="PlatformStatsImg"
                  />
                </div>
              </div>
              <div className="platform-stats-text-grid">
                <div className="ps-box ps-box-1">
                  <div className="ps-box-content">
                    <h3>
                      <span>$ 11 400 000</span>%
                    </h3>
                    <p>Growth In New User Sign-Ups</p>
                  </div>
                </div>
                <div className="ps-box ps-box-2">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>8</span> %
                    </h3>
                    <p>LTV Increase</p>
                  </div>
                </div>
                <div className="ps-box ps-box-3">
                  <div className="ps-box-content">
                    <h3>
                      <MdArrowUpward /> <span>90</span>
                    </h3>
                    <p>Campaign Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="highly-regarded-section">
          <div className="box box-p">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                highly regarded <br />
                <span>by industry partners</span>
              </h3>
              <a href="#" className="arrow-link">
                <span>MORE</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="highly-regarded-grid">
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Nico} alt="Nico" />
                    <div className="hrgc-head-name">
                      <h4>Nico Verderosa </h4>
                      <h6>@nico1991</h6>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img
                      loading="lazy"
                      src={companyLogo16}
                      alt="companyLogo16"
                    />
                    <div className="hrgc-head-name">
                      <h6>Kephi Gallery</h6>
                      <p>Chief Operation Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Tony} alt="Tony" />
                    <div className="hrgc-head-name">
                      <h4>Tony Spilotro </h4>
                      <h6>@black.m</h6>
                    </div>
                  </div>
                  <h6>
                    I had the pleasure of working with the Uptrend team on
                    various marketing projects. The agency took my projects very
                    seriously and worked closely to achieve my unique KPIs. I
                    highly recommend them and look forward to working with
                    Uptrend on my next major project.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img
                      loading="lazy"
                      src={companyLogo17}
                      alt="companyLogo17"
                    />
                    <div className="hrgc-head-name">
                      <h6>Bitcoinist</h6>
                      <p>Editorial Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Danny} alt="Danny" />
                    <div className="hrgc-head-name">
                      <h4>Danny Les </h4>
                      <h6>@black.m</h6>
                    </div>
                  </div>
                  <h6>
                    When working on more complex contracts we are often required
                    to seek external support. On many occasions we have enlisted
                    the assistance of Uptrend. We have always found them to be
                    professional and incredibly efficient and our clients are
                    always happy at the conclusion of the engagement.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img
                      loading="lazy"
                      src={companyLogo18}
                      alt="companyLogo18"
                    />
                    <div className="hrgc-head-name">
                      <h6>Content Tap</h6>
                      <p>Founder of The Content Tap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="im-trusted-by-utgs">
          <div className="box">
            <TrustedByCompanies trustedByLight={true} />
          </div>
        </section>
        <section className="ready-to-start-section ugs-ready-to-start-section">
          <div className="box">
            <div className="rts-content">
              <div className="rts-form">
                <h3>
                  Ready to start a <br /> new Uptrend?
                </h3>
                <div className="rts-form-grid">
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
                    SUBSCRIBE <span> TO OUR JOURNAL</span>
                  </button>
                </div>
              </div>
              <div className="sj-bull-elevator-img-box">
                <img
                  loading="lazy"
                  src={BullElevatorImg}
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

export default UptrendGrowthStories;
