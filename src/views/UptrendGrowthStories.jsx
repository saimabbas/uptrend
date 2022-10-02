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
import companyLogo16 from "../assets/img/logo-kephi.png";
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
import Lottie from "react-lottie";
import animationData from "./../assets/json/ut-growth-stories.json";

const UptrendGrowthStories = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    ScrollSmoother,
    ScrambleTextPlugin
  );
  useEffect(() => {
    // Text Spliting
    const marketingHeading = new SplitText(".im-hero-headings h1", {
      type: "chars, words,lines",
    });
    const marketingHeadingChars = marketingHeading.chars;
    const marketingHeadingLines = marketingHeading.lines;
    const marketingHeadingWords = marketingHeading.words;

    let marketingLandingAnim = gsap.timeline();
    marketingLandingAnim
      .fromTo(
        ".loading-screen",
        {
          opacity: "1",
        },
        {
          opacity: "0",
          delay: 1,
          duration: 0.65,
          ease: Linear.easeInOut,
        }
      )
      .fromTo(
        marketingHeadingChars,
        {
          opacity: 0,
          rotateY: 90,
        },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.65,
          stagger: {
            each: 0.025,
          },
        }
      )
      .fromTo(
        ".im-hero-headings h3",
        {
          opacity: 0,
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
        },
        "<0"
      )
      .fromTo(
        ".loading-screen",
        {
          height: "100vh",
        },
        {
          height: "0",
          duration: 0.01,
        },
        "<0"
      );
    gsap.fromTo(
      ".im-hero-explore svg",
      {
        y: 3,
      },
      {
        y: -3,
        ease: Linear.easeInOut,
        duration: 1,
        repeat: -1,
        yoyo: true,
      }
    );

    let nftCardsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-1",
        start: "top 25%",
      },
    });
    nftCardsAnim1
      .fromTo(
        ".ugs-pss-1 .platform-stats-img img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
        }
      )
      .fromTo(
        ".ugs-pss-1 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: {
            each: 0.25,
          },
        },
        0
      );
    let nftCardsAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-2",
        start: "top 25%",
      },
    });
    nftCardsAnim2
      .fromTo(
        ".ugs-pss-2 .platform-stats-img img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
        }
      )
      .fromTo(
        ".ugs-pss-2 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: {
            each: 0.25,
          },
        },
        0
      );
    let nftCardsAnim3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-3",
        start: "top 25%",
      },
    });
    nftCardsAnim3
      .fromTo(
        ".ugs-pss-3 .fashion-brand-img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
        }
      )
      .fromTo(
        ".ugs-pss-3 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: {
            each: 0.25,
          },
        },
        0
      );
    let nftCardsAnim4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-4",
        start: "top 25%",
      },
    });
    nftCardsAnim4
      .fromTo(
        ".ugs-pss-4 .platform-stats-img img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
        }
      )
      .fromTo(
        ".ugs-pss-4 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: {
            each: 0.25,
          },
        },
        0
      );
    let nftCardsAnim5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-5",
        start: "top 25%",
      },
    });
    nftCardsAnim5
      .fromTo(
        ".ugs-pss-5 .platform-stats-img img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
        }
      )
      .fromTo(
        ".ugs-pss-5 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: {
            each: 0.25,
          },
        },
        0
      );
  }, []);
  return (
    <main className="app">
      <div className="loading-screen">
        <UTLogo color="#fff" />
      </div>
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
                <a href="#explore">
                  <span>explore</span>
                  <MdArrowDownward />
                </a>
              </div>
            </div>
          </div>
          {/* <img
            loading="lazy"
            className="im-hero-img"
            src={ImHeroImg}
            alt="ImHeroImg"
          /> */}
          <div className="im-hero-img ">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <div className="ugs-pss-container" id="explore">
          <section className="platform-stats-section ugs-pss-1">
            <div className="box box-p">
              <div className="platform-stats-grid">
                <div className="platform-stats-details">
                  <h6>Case #1</h6>
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
                  <h6>Case #2</h6>
                  <h3>Top-10 Gaming App</h3>
                  <h4>In Sweden</h4>x{" "}
                  <h5>Strategies That Drive Revenue Growth</h5>
                  <p>
                    Uptrend growth strategies strategies helped propel Swedish
                    gaming startup to the top ten list of gaming apps in the
                    Apple App Store and increased client revenue.
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

            <div className="box box-p">
              <div className="platform-stats-grid fashion-brand-grid">
                <div className="platform-stats-details">
                  <h6>Case #3</h6>
                  <h3>FORTUNE-500 FASHION BRAND</h3>
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
            <div className="box box-p">
              <div className="platform-stats-grid">
                <div className="platform-stats-details">
                  <h6>Case #4</h6>
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
                  <h6>Case #5</h6>
                  <h3>The Leading Health App </h3>
                  <h4>In East Asia</h4>x{" "}
                  <h5>Venture Capital Creates Value for Startups</h5>
                  <p>
                    We helped the #1 health startup in East Asia attract
                    $11,400,000 venture capital in less than 90 days.
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
                    <div></div>
                    SUBSCRIBE TO OUR JOURNAL
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
