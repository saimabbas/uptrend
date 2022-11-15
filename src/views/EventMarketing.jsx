import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/em-hero-img.svg";
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
import { FreeMode } from "swiper";
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
import Lottie from "react-lottie";
import animationData from "./../assets/json/event-marketing.json";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
import chartAnimation4 from "./../assets/json/chart-animation-4.json";

const EventMarketing = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const [isStopped4, setIsStopped4] = useState(true);

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
  const chartOptions4 = {
    loop: false,
    autoplay: false,
    animationData: chartAnimation4,
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
          rotateY: 90,
        },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.35,
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
    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid",
        start: "top 50%",
      },
    });
    homeExpertiseAnim
      .fromTo(
        ".em-sd-grid-card-1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        }
      )
      .fromTo(
        ".em-sd-grid-card-2",
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
        ".em-sd-grid-card-3",
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
        ".em-sd-grid-card-4",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
        "<0.1"
      );
    /* .fromTo(
        ".em-sd-grid-card-1 img",
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
        ".em-sd-grid-card-1 h4",
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
        ".em-sd-grid-card-2 img",
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
        ".em-sd-grid-card-3 img",
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
        ".em-sd-grid-card-3 h2",
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
        ".em-sd-grid-card-3 h6",
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
        ".em-sd-grid-card-4 img",
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
        ".em-sd-grid-card-4 h4",
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
        ".em-sd-grid-card-4 ul",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      ); */
    const playChartAnimation4 = () => {
      setIsStopped4(false);
    };
    let nftCardsAnim4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-1",
        start: "top 85%",
      },
      onComplete: playChartAnimation4,
    });
    nftCardsAnim4.fromTo(
      ".ugs-pss-1 .ps-box",
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
      <div className="event-marketing-page">
        <Header lightHeader={false} showIconsBox={showIconsBox} />

        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <div></div>
              {isIconsBoxShowing ? (
                <div className="hero-icons-line-box">
                  <div></div>
                  <a href="https://wa.me/message/UVIGWUX7PGR6A1">
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
                <h1>Event Marketing</h1>
                <h3>We guide brands through event planning of any magnitude</h3>
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
          <div className="im-hero-img ">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="service-description-section" id="explore">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>SERVICE DESCRIPTION</h2>
              <a href="/talktous" className="arrow-link">
                {" "}
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid">
              <div className="sd-grid-card em-sd-grid-card-1">
                <div className="em-sd-grid-card-1-bg"></div>
                <img loading="lazy" src={PhotoImg} alt="PhotoImg" />
                <h4>
                  We shape <b>memorable and impactful experiences</b>
                </h4>
              </div>
              <div className="sd-grid-card em-sd-grid-card-2">
                <div className="em-sd-grid-card-2-bg"></div>
                <img loading="lazy" src={EMSD2ndImg} alt="EMSD2ndImg" />
              </div>
              <div className="sd-grid-card em-sd-grid-card-3">
                <div className="em-sd-grid-card-3-bg"></div>
                <img loading="lazy" src={EMSD3rdImg} alt="EMSD3rdImg" />
                <h2>277%</h2>
                <h6>Organic Traffic </h6>
              </div>
              <div className="sd-grid-card em-sd-grid-card-4">
                <div className="em-sd-grid-card-4-bg"></div>
                <img loading="lazy" src={KnotImg} alt="KnotImg" />
                <h4>Enhance attention surrounding iconic brands</h4>
                <ul>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>
                    <p>Brand Meetups </p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>{" "}
                    <p>Press Events </p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>{" "}
                    <p>Web Panels</p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>{" "}
                    <p>Online Webinars </p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                    </div>{" "}
                    <p>Live Streams</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="em-events-section">
          <div className="box">
            <UpTrendsEvents />
          </div>
        </section>
        <BackedByLogosSwiper backedByLight={true} />
        <section className="platform-stats-section ugs-pss-1">
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
                {/* <img
                  loading="lazy"
                  src={LocalStartupImg}
                  alt="LocalStartupImg"
                /> */}
                <Lottie
                  className="im-hero-img"
                  options={chartOptions4}
                  isStopped={isStopped4}
                />
              </div>
            </div>
            <div className="platform-stats-text-grid pstgm">
              <div className="ps-box ps-box-1">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span>2.3</span>X
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
        <GreenWaveHeadingSection
          smallText="ready to start"
          bigText="a new trend?"
          linkText="let's get started!"
          linkOfText="/talktous"
        />
        <section className="faq-section">
          <div className="box">
            <h3>
              Frequently Asked Questions <br /> (FAQs)
            </h3>
            <div className="faq-box">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>What Is Event Marketing?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Promotional event marketing is a type of experiential
                      marketing service, aimed at creating memorable experiences
                      and meaningful connections between a brand's
                      representatives and its audience.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>What Value Does Event Marketing Provide?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The event, the lead-up, and buzz after will help build
                      brand presence, generate sales leads, increase customer
                      engagement, or even help promote a specific product or
                      service.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>What Makes Event Marketing Successful?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      In today's fast-paced world, it is critical for businesses
                      to stand out from the crowd. Event marketing is the ideal
                      method, providing ample networking opportunities and new
                      channels to connect with future and returning customers.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>
                        What Is Included In Uptrend Event Marketing Services?
                      </p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Experiential marketing events come in many formats: live,
                      virtual, or a combination of both. Uptrend develops
                      engaging experiences through inspiring stories that
                      captivate audience no matter where they happen to be.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                  <div></div>
                  <button>
                    <div></div>
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

export default EventMarketing;
