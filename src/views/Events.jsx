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
import EmHeroImg from "../assets/img/events-hero-img.svg";
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
import ImpactfulImg from "../assets/img/impactful-img.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import EventImg1 from "../assets/img/event-img-1.png";
import EventImg2 from "../assets/img/em2.png";
import EventImg3 from "../assets/img/em3.png";
import ClockIcon from "../assets/img/clock-icon.svg";
import YouTubeIcon from "../assets/img/youtube-icon.svg";
import UEBGImg1 from "../assets/img/ue-bg-img-1.png";
import UEBGImg2 from "../assets/img/ue-bg-img-2.png";
import Lottie from "react-lottie";
import animationData from "./../assets/json/events.json";
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

const Events = () => {
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

    let nftCardsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".uptrends-events-grid-m",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".uptrends-events-img-grid",
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
    let nftCardsAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".upcoming-events-grid",
        start: "top 50%",
      },
    });
    nftCardsAnim2.fromTo(
      ".upcoming-events-grid-card",
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
                <h1>Uptrend Events</h1>
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
          <div className="im-hero-img events-hero-img">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="service-description-section" id="explore">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>A Venue For Education, Networking, And Growth</h2>
            </div>
            <Tab.Container defaultActiveKey="a1">
              <div className="blog-tabs">
                <Nav varient="tabs">
                  <Swiper
                    slidesPerView={"auto"}
                    freeMode={true}
                    spaceBetween={0}
                    className="ds-tabs-nav"
                    modules={[Autoplay, FreeMode]}
                  >
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a1">Brand Meetup</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a2">Webinar</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a3">Web Panel </Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a4">Metaverse Event</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a5">Conference</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a6">Interview</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a7">Promo</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a8">Live Stream</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                  </Swiper>
                </Nav>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className="blog-tabs-content">
                    <div className="main-blog-grid">
                      <div className="main-blog-grid-left">
                        <div className="white-tag">Promo</div>
                        <h3>
                          Spread Your Message <br /> Across The Globe!
                        </h3>
                        <p>
                          We shape memorable and impactful experiences.
                          Influental names gather to share insights with
                          industry innovators.
                        </p>
                      </div>
                      <div className="main-blog-grid-right">
                        <img src={ImpactfulImg} alt="ImpactFulImg" />
                      </div>
                    </div>
                    <div className="uptrends-events-grid uptrends-events-grid-m">
                      <div className="uptrends-events-img-grid">
                        <span>Meetup</span>
                        <img loading="lazy" src={EventImg1} alt="EventImg" />
                        <h4>
                          Meetup in Turkey <img src={TrImg} alt="" />
                        </h4>
                        <p>
                          Our meetup attracted attention from finance
                          influencers, business executives, and key industry
                          leaders. The event was higly regarded by Uptrend's
                          partners.
                        </p>
                      </div>
                      <div className="uptrends-events-img-grid">
                        <span>Meetup</span>
                        <img loading="lazy" src={EventImg2} alt="EventImg" />
                        <h4>
                          Event in Ecuador <img src={ECImg} alt="" />
                        </h4>
                        <p>
                          An engaging educational event was launched in Latin
                          America, successfully introducing new audiences
                          one-stop solutions in fintech, ecommerce, and
                          consulting industries.
                        </p>
                      </div>
                      <div className="uptrends-events-img-grid">
                        <span>Conference</span>
                        <img loading="lazy" src={EventImg3} alt="EventImg" />
                        <h4>Uptrend Brand Event</h4>
                        <p>
                          An exclusive Uptrend brand event designed to showcase
                          our expertise and introduce best-in-class marketing
                          insights.
                        </p>
                      </div>
                    </div>
                    <div className="blog-bcr">
                      <div className="ut-breadcrumbs-section">
                        <div className="ut-breadcrumbs">
                          <div className="ut-breadcrumbs-box ut-breadcrumbs-box-active">
                            1
                          </div>
                          <div className="ut-breadcrumbs-box">2</div>
                          <div className="ut-breadcrumbs-box">3</div>
                          <div className="ut-breadcrumbs-box ut-breadcrumbs-box-inactive">
                            ...
                          </div>
                          <div className="ut-breadcrumbs-box">10</div>
                          <div className="ut-breadcrumbs-box">
                            <MdArrowForward />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <p className="red-p">Some Content Here 2</p>{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="a3">
                  <p className="red-p">Some Content Here 3</p>{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="a4">
                  <p className="red-p">Some Content Here 4</p>{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="a5">
                  <p className="red-p">Some Content Here 5</p>{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="a6">
                  <p className="red-p">Some Content Here 6</p>{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="a7">
                  <p className="red-p">Some Content Here 7</p>{" "}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section>

        <section className="upcoming-events">
          <div className="box">
            <h2 className="ts-head">Upcoming Events</h2>
            <div className="upcoming-events-grid">
              <div className="upcoming-events-grid-card">
                <img src={UEBGImg1} alt="UEBGImg1" />
                <div className="uegc-content">
                  <h6>Uptrend Webinar</h6>
                  <br />
                  <h2>From Zero to One Million Followers:</h2>
                  <p>
                    The Ultimate Guide to Build Personal Brand on Social Media
                    in 2022
                  </p>
                  <div className="ue-details-grid">
                    <div>
                      <h2>15 </h2> <span>AUG</span>
                    </div>
                    <div>
                      <img src={ClockIcon} alt="ClockIcon" />
                      <p>10:00 - 11:00 UTC</p>
                    </div>
                    <div>
                      <a href="https://www.youtube.com/channel/UChoWOblODaVznldgEFmZT4g">
                        <img src={YouTubeIcon} alt="" />
                      </a>
                    </div>
                  </div>
                  <h2>Lisa N Edwards</h2>
                  <p>Australian actress, producer, screenwriter and author</p>
                  <span className="color-green">Over €500 in prizes!</span>
                </div>
              </div>
              <div className="upcoming-events-grid-card">
                <img src={UEBGImg2} alt="UEBGImg1" />
                <div className="uegc-content">
                  <h6>Uptrend Webinar</h6>
                  <br />
                  <p>How to Establish Impactful Influencer</p>
                  <h2>
                    Marketing Campaign Based on Trust, Responsobility and
                    Diligence{" "}
                  </h2>
                  <div className="ue-details-grid">
                    <div>
                      <h2>10 </h2> <span>SEP</span>
                    </div>
                    <div>
                      <img src={ClockIcon} alt="ClockIcon" />
                      <p>12:00-13:00 UTC</p>
                    </div>
                    <div>
                      <a href="https://www.youtube.com/channel/UChoWOblODaVznldgEFmZT4g">
                        <img src={YouTubeIcon} alt="" />
                      </a>
                    </div>
                  </div>
                  <h2>Nicolás Verderosa</h2>
                  <p>CEO Kephi Gallery</p>
                  <span className="color-orange">Over €800 in prizes!</span>
                </div>
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

export default Events;
