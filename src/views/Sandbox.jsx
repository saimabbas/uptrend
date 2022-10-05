import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "../styles/views/marketing-views.css";
import "../styles/views/blog.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/sandbox-hero-img.svg";
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img-2.png";
import PhotoImg from "../assets/img/photo-img.png";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import KnotImg from "../assets/img/knot-img.png";
import TrImg from "../assets/img/tr.svg";
import ECImg from "../assets/img/ec.svg";
import BBLogo1Dark from "../assets/img/backedby-logo-1-dark.svg";
import BBLogo2Dark from "../assets/img/backedby-logo-2-dark.svg";
import BBLogo3Dark from "../assets/img/backedby-logo-3-dark.svg";
import BBLogo4Dark from "../assets/img/backedby-logo-4-dark.svg";
import BBLogo5Dark from "../assets/img/backedby-logo-5-dark.svg";
import BBLogo6Dark from "../assets/img/backedby-logo-6-dark.svg";
import Person from "../assets/img/blog-person.svg";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
import ImpactfulImg from "../assets/img/marketing-in-metaverse.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import EventImg1 from "../assets/img/event-img-1.png";
import EventImg2 from "../assets/img/em2.png";
import EventImg3 from "../assets/img/em3.png";
import ClockIcon from "../assets/img/clock-icon.svg";
import YouTubeIcon from "../assets/img/youtube-icon.svg";
import UEBGImg1 from "../assets/img/ue-bg-img-1.png";
import UEBGImg2 from "../assets/img/ue-bg-img-2.png";
import CrownImg from "../assets/img/crown.svg";
import ConnectionImg from "../assets/img/connection.svg";
import MMSD2ndImg2 from "../assets/img/mm-sd-2nd-img-2.png";
import MMSD4thImg2 from "../assets/img/mm-sd-4th-img-2.svg";
import ShowcaseImg from "../assets/img/showcase-gallery.svg";
import TRArrowImg from "../assets/img/top-right-arrow.svg";
import BonsaiImg from "../assets/img/bonsai.png";
import Web3Img1 from "../assets/img/w3-img-1.png";
import Web3Img2 from "../assets/img/w3-img-2.png";
import Web3Img3 from "../assets/img/w3-img-3.png";
import Web3Img4 from "../assets/img/w3-img-4.png";
import Web3Img5 from "../assets/img/w3-img-5.png";
import Web3Img6 from "../assets/img/w3-img-6.png";

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

// Components
import Header from "../components/Header";
import TrustedByCompanies from "../components/TrustedByCompanies";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";
import UpTrendsEvents from "../components/UpTrendsEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import GreenWaveHeadingSection from "../components/GreenWaveHeadingSection";
import BackedByLogosSwiper from "../components/BackedByLogosSwiper";
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
// import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BlogCard from "../components/BlogCard";
import { Tab, Nav } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "./../assets/json/sandbox.json";

const Sandbox = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const showIconsBox = () => {
    setIsIconsBoxShowing(!isIconsBoxShowing);
    setTimeout(() => {
      setIsIconsBoxShowing(false);
    }, 5000);
  };
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
          duration: 0.35,
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
          duration: 0.35,
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
          duration: 0.35,
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
    let nftCardsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".web3-places",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".web3-places-grid-card",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: {
          each: 0.1,
        },
      }
    );

    let homeExpertiseAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid-2",
        start: "top 50%",
      },
    });
    homeExpertiseAnim2
      .fromTo(
        ".msgc1-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
        "<0"
      )
      .fromTo(
        ".msgc2-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
        "<0.1"
      )
      .fromTo(
        ".msgc3-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
        "<0.1"
      )
      .fromTo(
        ".msgc4-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
        "<0.1"
      );
    /* 
      .fromTo(
        ".msgc2-2 img",
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
        ".msgc3-2 img",
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
        ".msgc4-2 img",
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
        ".msgc3-2 h5",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      ); */
  }, []);

  return (
    <main className="app">
      {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
      <div className="event-marketing-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} showIconsBox={showIconsBox} />
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
              <div className="im-hero-headings">
                <h1>Uptrend Office In The Sandbox</h1>
                <h3>Designed By An Award-Winning Marketing Partner</h3>
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
            src={EmHeroImg}
            alt="EmHeroImg"
          /> */}
          <div className="im-hero-img">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="service-description-section" id="explore">
          <div className="box">
            <div className="blog-tabs-content">
              <div className="main-blog-grid">
                <div className="main-blog-grid-left">
                  <div className="white-tag">Promo</div>
                  <h3>Explore Marketing In The Metaverse</h3>
                  <p>
                    Uptrend Designers Construct A Powerful Brand Presence In The
                    Metaverse With Innovative Interactive Experiences
                  </p>
                </div>
                <div className="main-blog-grid-right">
                  <img src={ImpactfulImg} alt="ImpactFulImg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="web3-places">
          <div className="box">
            <div className="web3-places-grid">
              <div className="web3-places-grid-card">
                <img src={Web3Img1} alt="Web3Img" />
                <h5>Uptrend Lobby</h5>
                <p>
                  Interact with the entire asset library designed for Uptrend
                  guests
                </p>
              </div>
              <div className="web3-places-grid-card">
                <img src={Web3Img2} alt="Web3Img" />
                <h5>NFT Arts</h5>
                <p>
                  The Uptrend gallery hosts exclusive NFTs from world-renowned
                  artists
                </p>
              </div>
              <div className="web3-places-grid-card">
                <img src={Web3Img3} alt="Web3Img" />
                <h5>Conference Room</h5>
                <p>A virtual venue for Uptrend speakers</p>
              </div>
              <div className="web3-places-grid-card">
                <img src={Web3Img4} alt="Web3Img" />
                <h5>Networking Area</h5>
                <p>Private rooms for business discussions</p>
              </div>
              <div className="web3-places-grid-card">
                <img src={Web3Img5} alt="Web3Img" />
                <h5>Dance Floor</h5>
                <p>Enjoy original house DJ sets every weekend!</p>
              </div>
              <div className="web3-places-grid-card">
                <img src={Web3Img6} alt="Web3Img" />
                <h5>Reception Desk</h5>
                <p>The Uptrend virtual office is open to everyone!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sandbox-sds service-description-section service-description-section-2">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Engage With Uptrend In The Metaverse</h2>
              <a href="#" className="arrow-link">
                <span>Learn More</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid service-description-grid-2">
              <div className="sd-grid-card mm-sd-grid-card-2-1 msgc1-2">
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={CrownImg} alt="CrownImg" />
                  <h5>Introduce exclusive NFTs</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={ConnectionImg} alt="ConnectionImg" />
                  <h5>Provide networking events</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={ShowcaseImg} alt="ShowcaseImg" />
                  <h5>Showcase new products</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={TRArrowImg} alt="TRArrowImg" />
                  <h5>Tap into venture capital</h5>
                </div>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4 msgc2-2">
                <div className="msgc2-2-bg"></div>
                <img loading="lazy" src={MMSD2ndImg2} alt="MMSD4thImg" />
              </div>
              <div className="sd-grid-card mm-sd-grid-card-3-2 msgc3-2">
                <div className="msgc3-2-bg"></div>
                <img loading="lazy" src={BonsaiImg} alt="BonsaiImg" />
                <h5>
                  <b> Achieve the holistic growth</b> by integrating your
                  business in Metaverse
                </h5>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4 msgc4-2">
                <div className="msgc4-2-bg"></div>
                <img loading="lazy" src={MMSD4thImg2} alt="MMSD4thImg" />
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

export default Sandbox;
