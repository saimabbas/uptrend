import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import ImHeroImg from "../assets/img/uptrendcareer-hero-img.svg";
import ImHeroVideo from "../assets/videos/im-hero-video.mp4";
import WinnertrophyImg from "../assets/img/calender-img.svg";
import PurplePlanetImg from "../assets/img/purple-planet-img.png";
import ShokhiGirlImg from "../assets/img/shokhi-girl-img.png";
import ExploreGlobeImg from "../assets/img/explore-globe-img.svg";
import MeetCelebritiesImg from "../assets/img/meet-celebrities-img.svg";
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
import BullElevatorImg from "../assets/img/bull-elevator-img-2.svg";
import PlatformLogo11 from "../assets/icons/kakaotalk-logo-2.svg";
import UTPartners from "../assets/img/ut-partners-img-red.png";
import IndustriesPlanetImg from "../assets/img/industries-planet.png";
import CrossPolinationImg from "../assets/img/cross-polination.svg";
import CPBeeImg from "../assets/img/cp-bee-img.svg";
import PlatformStatsImg from "../assets/img/platform-stats-img.svg";
import BigThingsWave from "../assets/img/big-things-wave.svg";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.svg";

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

const UptrendCareer = () => {
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
          duration: 0.5,
          ease: Linear.easeInOut,
        }
      )
      .fromTo(
        marketingHeadingChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          stagger: {
            each: 0.05,
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
    gsap.fromTo(
      ".cp-details img",
      {
        y: 10,
        rotate: 5,
      },
      {
        rotate: -5,
        y: -10,
        ease: Linear.easeInOut,
        duration: 2,
        repeat: -1,
        yoyo: true,
      }
    );
    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid",
        start: "top 50%",
      },
    });
    homeExpertiseAnim
      .fromTo(
        ".uc-sd-grid-card-1-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".uc-sd-grid-card-2-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".uc-sd-grid-card-3-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".uc-sd-grid-card-4-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".uc-sd-grid-card-5-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".uc-sd-grid-card-6-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sd-grid-card-1 > img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.5"
      )
      .fromTo(
        ".sdgc1-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sdgc2-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".all-platforms-grid",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sd-grid-card-4 > img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sdgc3-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sd-grid-card-3 > img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      )
      .fromTo(
        ".sd-grid-card-3 > p",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      );
    let scrambleTextStats = gsap.timeline({
      scrollTrigger: {
        trigger: ".platform-stats-section",
        start: "top 50%",
      },
    });
    scrambleTextStats
      .to(".ps-box-1 h3 span", {
        duration: 3,
        scrambleText: {
          text: "690",
          chars: "0 1 2 3 4 5 6 7 8 9",
          revealDelay: 0.5,
          speed: 1,
          delay: 5,
        },
      })
      .to(
        ".ps-box-2 h3 span",
        {
          duration: 3,
          scrambleText: {
            text: "64",
            chars: "0 1 2 3 4 5 6 7 8 9",
            revealDelay: 0.5,
            speed: 1,
            delay: 5,
          },
        },
        0
      )
      .to(
        ".ps-box-3 h3",
        {
          duration: 3,
          scrambleText: {
            text: "14,320,344",
            chars: "0 1 2 3 4 5 6 7 8 9",
            revealDelay: 0.5,
            speed: 1,
            delay: 5,
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
      <div className="influencer-marketing-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Join the #1 Growth Agency in Europe</h1>
                <h3>
                  We're looking for talented growth experts to fill key roles
                  focusing on client success
                </h3>
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
          {/* <video className="im-hero-img" muted autoPlay loop>
            <source src={ImHeroVideo} type="video/mp4"></source>
          </video> */}
        </section>
        <section
          className="service-description-section uc-service-description-section"
          id="service-description"
        >
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Uptrend Benefits</h2>
            </div>
            <div className="service-description-grid">
              <div className="sd-grid-card sd-grid-card-1">
                <div className="uc-sd-grid-card-1-bg"></div>
                <div className="ucsdgc1-details">
                  <h3>Flexible Work Schedule</h3>
                  <h6>Time management is our growth hack</h6>
                </div>
                <img
                  loading="lazy"
                  src={WinnertrophyImg}
                  alt="WinnertrophyImg"
                />
              </div>
              <div className="sd-grid-card sd-grid-card-3">
                <div className="sd-grid-card-3-bg"></div>
                <img loading="lazy" src={PurplePlanetImg} alt="UTPartners" />
                <div className="ucsdgc1-details ucsdgc1-details-p">
                  <h3>Explore The Globe</h3>
                  <h6>Establish brand presence in various regions</h6>
                </div>
              </div>
              <div className="sd-grid-card sd-grid-card-3">
                <div className="sd-grid-card-3-bg"></div>
                <img loading="lazy" src={ShokhiGirlImg} alt="UTPartners" />
                <div className="ucsdgc1-details ucsdgc1-details-p">
                  <h3>Exclusive Corporate Events</h3>
                  <h6>Premier events with exclusive interactive experiences</h6>
                </div>
              </div>
              <div className="sd-grid-card sd-grid-card-1">
                <div className="uc-sd-grid-card-1-bg"></div>
                <div className="ucsdgc1-details">
                  <h3>Explore The Globe</h3>
                  <h6>Establish brand presence in various regions</h6>
                </div>
                <img
                  loading="lazy"
                  src={ExploreGlobeImg}
                  alt="WinnertrophyImg"
                />
              </div>
              <div className="sd-grid-card sd-grid-card-2">
                <div className="uc-sd-grid-card-5-bg"></div>
                <div className="ucsdgc1-details">
                  <h3>Upgrade Your Social Media </h3>
                  <h6>Unleash the power of personal branding</h6>
                  <div className="all-platforms-grid">
                    <div className="apg-box">
                      <img
                        loading="lazy"
                        src={PlatformLogo2}
                        alt="PlatformLogo2"
                      />
                    </div>
                    <div className="apg-box">
                      <img
                        loading="lazy"
                        src={PlatformLogo6}
                        alt="PlatformLogo6"
                      />
                    </div>
                    <div className="apg-box">
                      <img
                        loading="lazy"
                        src={PlatformLogo7}
                        alt="PlatformLogo7"
                      />
                    </div>
                    <div className="apg-box">
                      <img
                        loading="lazy"
                        src={PlatformLogo8}
                        alt="PlatformLogo8"
                      />
                    </div>
                    <div className="apg-box">
                      <img
                        loading="lazy"
                        src={PlatformLogo9}
                        alt="PlatformLogo9"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sd-grid-card sd-grid-card-1">
                <div className="uc-sd-grid-card-6-bg"></div>
                <div className="ucsdgc1-details">
                  <h3>Meet Celebrities & Influencers</h3>
                  <h6>Take advantage of the Uptrend network</h6>
                </div>
                <img
                  loading="lazy"
                  src={MeetCelebritiesImg}
                  alt="WinnertrophyImg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="positions-section">
          <div className="box box-p">
            <h2 className="expertise-heading">EXPERTISE</h2>
            <p>Current Job Openings</p>
            <div className="positions-grid">
              <div className="positions-grid-card">
                <h2>
                  <span>DESIGN</span>
                  <br />
                  metaverse designer
                </h2>
                <div className="pgc-bottom">
                  <p>Global</p>
                  <a href="#">
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="positions-grid-card">
                <h2>
                  <span>sales</span>
                  <br />
                  Business Development Manager
                </h2>
                <div className="pgc-bottom">
                  <p>Asia</p>
                  <a href="#">
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="positions-grid-card">
                <h2>
                  <span>Marketing</span>
                  <br />
                  Growth Strategist
                </h2>
                <div className="pgc-bottom">
                  <p>Europe</p>
                  <a href="#">
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="positions-grid-card">
                <h2>
                  <span>Execution</span>
                  <br />
                  Community Manager
                </h2>
                <div className="pgc-bottom">
                  <p>Europe</p>
                  <a href="#">
                    <MdArrowForward />
                  </a>
                </div>
              </div>
            </div>
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

export default UptrendCareer;
