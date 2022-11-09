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
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
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
import Lottie from "react-lottie";
import UTLogo from "../assets/icons/UTLogo";
import BackedByLogosSwiper from "../components/BackedByLogosSwiper";
import chartAnimation1 from "./../assets/json/chart-animation-1.json";
const chartOptions1 = {
  loop: false,
  autoplay: false,
  animationData: chartAnimation1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const TalkToUs = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const [isStopped1, setIsStopped1] = useState(true);

  const showIconsBox = () => {
    setIsIconsBoxShowing(!isIconsBoxShowing);
    setTimeout(() => {
      setIsIconsBoxShowing(false);
    }, 50000);
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
    const UTStoreHead = new SplitText(".ut-store-details h2", {
      type: "chars, words,lines",
    });
    const UTStoreHeadChars = UTStoreHead.chars;
    const UTStoreHeadWords = UTStoreHead.words;
    const RTSHeading = new SplitText(".w50-light-content h2", {
      type: "words,lines",
    });

    const RTSHeadingWords = RTSHeading.words;
    const RTSHeadingLines = RTSHeading.lines;

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
        RTSHeadingWords,
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.1,
          },
        }
      )
      .fromTo(
        ".ttu-form-grid",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
        }
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
    const playChartAnimation1 = () => {
      setIsStopped1(false);
    };
    let nftCardsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ttu-pss-1",
        start: "top 100%",
      },
      onComplete: playChartAnimation1,
    });
    nftCardsAnim1.fromTo(
      ".ttu-pss-1 .ps-box",
      {
        y: "5rem",
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0,
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
      <div className="talktous-page">
        <Header lightHeader={false} showIconsBox={showIconsBox} />
        <div className="box">
          <div className="ttu-header">
            {isIconsBoxShowing ? (
              <div className="hero-icons-line-box">
                <div></div>
                <a href="#">
                  <IconWhatsapp color="#fff" />
                </a>
                <a href="https://twitter.com/UptrendAgency">
                  <IconTwitter color="#fff" />
                </a>
                <a href="https://www.linkedin.com/company/UptrendAgency">
                  <IconLinkedIn color="#fff" />
                </a>
                <a href="http://instagram.com/uptrendagency">
                  <IconInstagram color="#fff" />
                </a>
                <a href="https://facebook.com/UptrendAgency">
                  <IconFacebook color="#fff" />
                </a>
              </div>
            ) : null}
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
        <section className="platform-stats-section ttu-pss-1">
          <div className="box box-p">
            <div className="platform-stats-grid">
              <div className="platform-stats-details">
                <h6>Cases</h6>
                <h3>#1 ONLINE EDUCATIONAL</h3>
                <h4>PLATFORM IN EUROPE</h4>x{" "}
                <h5>Growth Unlocked - Performance Guaranteed</h5>
                <p>
                  By seamlessly integrating with Uptrend, our partner achieved
                  unprecedented growth with influencer marketing service
                </p>
              </div>
              <div className="platform-stats-img">
                {/* <img
                  loading="lazy"
                  src={PlatformStatsImg}
                  alt="PlatformStatsImg"
                /> */}
                <Lottie
                  className="im-hero-img"
                  options={chartOptions1}
                  isStopped={isStopped1}
                />
              </div>
            </div>
            <div className="platform-stats-text-grid pstgm2">
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
                    <MdArrowUpward /> <span>64</span> %
                  </h3>
                  <p>LTV Increase</p>
                </div>
              </div>
              <div className="ps-box ps-box-3">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span> 14 320 344</span>
                  </h3>
                  <p>Campaign Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Event-marketing-section ems-1">
          <div className="box">
            <BackedByLogosSwiper backedByLight={true} />
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
                    SUBSCRIBE <span> TO OUR JOURNAL</span>
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
