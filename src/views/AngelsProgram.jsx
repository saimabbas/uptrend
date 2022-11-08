import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "../styles/views/marketing-views.css";
import "../styles/views/blog.css";
import "../styles/views/angelsprogram.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/angelsprogram-hero-img.png";
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
import Person from "../assets/img/emre.png";
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
import APImg1 from "../assets/img/ap-img-1.png";
import APImg2 from "../assets/img/ap-img-2.png";
import APImg3 from "../assets/img/ap-img-3.png";
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
  MdClose,
  MdRemove,
  MdAdd,
} from "react-icons/md";

// Components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
import animationData from "./../assets/json/angels-program.json";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        trigger: ".ap-img-grid",
        start: "top 75%",
      },
    });
    nftCardsAnim.fromTo(
      ".ap-img-grid img",
      {
        opacity: 0,
        y: "5rem",
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
  }, []);

  return (
    <main className="app">
      {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
      <div className="event-marketing-page angelsprogram-page">
        <section className="hero-section im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={true} showIconsBox={showIconsBox} />
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
              <div className="ap-hero-headings im-hero-headings">
                <h1>Uptrend Angels Progam</h1>
                <h3>Build a holistic marketing experience for everyone</h3>
              </div>
              <div className="im-hero-explore ap-hero-explore">
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
          <div className="im-hero-img ap-hero-img">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="angelsprogram-details" id="explore">
          <div className="box">
            <div className="apd-grid">
              <div className="apd-grid-left">
                <img src={EventImg1} alt="EventImg1" />
              </div>
              <div className="apd-grid-right">
                <h3>Become Uptrend Angel</h3>
                <p>
                  The Uptrend Angels Program invites you to join a thriving
                  community of expert growth hackers. As an Uptrend Angel, you
                  will get the opportunity to participate in exclusive
                  networking events, develop your personal brand, and monetize
                  your network. Uptrend provides a supportive environment for
                  accelerating growth.
                </p>
                <button onClick={handleShow} className="ut-btn-green">
                  JOIN ANGEL PROGRAM
                </button>
              </div>
            </div>
            <div className="section-heading-box">
              <div>
                <h3 className="head-subhead">
                  Do What You Love. Join Uptrend Angels
                </h3>
              </div>
            </div>
            <div className="ap-img-grid">
              <img src={APImg1} alt="APImg" />
              <img src={APImg2} alt="APImg" />
              <img src={APImg3} alt="APImg" />
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
              <div className="sj-bull-elevator-img-box angels-bulls">
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
        <Modal centered={true} show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="join-angelprogram">
              <div className="join-angelprogram-heading">
                <h2>Join Angel Program</h2>
                <span onClick={handleClose}>
                  <MdClose />
                </span>
              </div>
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
                <input className="ut-input" type="text" placeholder="Email" />
                <input
                  className="ut-input"
                  type="text"
                  placeholder="Telegram or Whatsapp"
                />
                <textarea
                  className="ut-input"
                  placeholder="Covering Letter"
                ></textarea>
              </div>
              <div className="ap-btn-grid">
                <button className="ut-btn-green">SEND</button>
                <button className="ut-btn-md ut-btn-lightgray">
                  ATTACH CV
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </main>
  );
};

export default Sandbox;
