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
import EmHeroImg from "../assets/img/blog-hero-img.svg";
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
import JournalImg1 from "../assets/img/journal-img-1.svg";
import JournalImg2 from "../assets/img/journal-img-2.svg";
import JournalImg3 from "../assets/img/journal-img-3.svg";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
import JournalImg4 from "../assets/img/journal-img-4.svg";
import Lottie from "react-lottie";
import animationData from "./../assets/json/blog.json";

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

const EventMarketing = () => {
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
          duration: 0.5,
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
          duration: 0.5,
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
    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid",
        start: "top 50%",
      },
    });
    homeExpertiseAnim
      .fromTo(
        ".em-sd-grid-card-1-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".em-sd-grid-card-2-bg",
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
        ".em-sd-grid-card-3-bg",
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
        ".em-sd-grid-card-4-bg",
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
      );

    let nftCardsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog-cards-grid",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".blog-cards-grid .blog-card",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: {
          each: 0.15,
        },
      }
    );
    let nftCardsAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top-stories-content",
        start: "top 50%",
      },
    });
    nftCardsAnim2.fromTo(
      ".top-stories-content .blog-card",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: {
          each: 0.15,
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
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Uptrend Journal</h1>
              </div>
              <div className="im-hero-explore">
                <a href="#">
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
        <div className="blog-content-wrapper"></div>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Stories for Passion, Marketing, and Success</h2>
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
                        <Nav.Link eventKey="a1">Branding</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a2">Influencer Marketing</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a3">Crypto</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a4">Metaverse</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a5">Gaming</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a6">Performance</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="a7">News</Nav.Link>
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
                        <div className="white-tag">Branding</div>
                        <h3>
                          Working With Leading YouTube Influencers:{" "}
                          <span> A How To Guide</span>
                        </h3>
                        <p>
                          Learn exclusive insights on how to develop
                          long-lasting partnerships with powerful influencers
                          based on responsibility and trust
                        </p>
                        <div className="blog-img-para">
                          <div className="bipara-left">
                            <img src={Person} alt="" />
                            <div className="bi-text">
                              <h5>Emre Murry</h5>
                              <p>18.06.2022</p>
                            </div>
                          </div>
                          <span>5 mint read</span>
                        </div>
                      </div>
                      <div className="main-blog-grid-right">
                        <img src={JournalImg3} alt="JournalImg3" />
                      </div>
                    </div>
                    <div className="blog-cards-grid">
                      <BlogCard
                        lightBlogCard={false}
                        blogImg={JournalImg1}
                        heading="3 Proven Strategies To Building Brand Awareness in 2022"
                        description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                        personImg={Person}
                        personName="Alex Wanstein"
                        date="10.06.2022"
                        readTime="5 mint read"
                      >
                        <span>Gaming</span>
                        <span>News</span>
                      </BlogCard>
                      <BlogCard
                        lightBlogCard={false}
                        blogImg={JournalImg2}
                        heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"
                        description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                        personImg={Person}
                        personName="Donna Wanstein"
                        date="7.06.2022"
                        readTime="5 mint read"
                      >
                        <span>Gaming</span>
                      </BlogCard>
                      <BlogCard
                        lightBlogCard={false}
                        blogImg={JournalImg3}
                        heading="3 Proven Strategies To Building Brand Awareness in 2022"
                        description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                        personImg={Person}
                        personName="Donna Wanstein"
                        date="7.06.2022"
                        readTime="5 mint read"
                      >
                        <span>News</span>
                      </BlogCard>
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

        <section className="top-stories">
          <div className="box">
            <h2 className="ts-head">Top Stories</h2>
            <div className="top-stories-content">
              <div className="topstories-right">
                <BlogCard
                  lightBlogCard={true}
                  blogImg={JournalImg2}
                  heading="Top-5 Influencer Marketing Software Solutions To Boost Your Brand in 2022 (Part 2)"
                  personImg={Person}
                  personName="Donna Wanstein"
                  date="12.06.2022"
                  readTime="10 mint read"
                >
                  <span>Gaming</span>
                </BlogCard>
                <BlogCard
                  lightBlogCard={true}
                  blogImg={JournalImg2}
                  heading="Top Regions With The Best Marketing Performance"
                  personImg={Person}
                  personName="Sarah Evans"
                  date="18.06.2022"
                  readTime="5 mint read"
                >
                  <span>Gaming</span>
                </BlogCard>
              </div>

              <BlogCard
                lightBlogCard={true}
                blogImg={JournalImg2}
                heading="New Local Region? Tips To Get Started"
                description="The ultimate marketing plan for dominating local markets. Get the fundamental insights to impact your customers. We introduce essential marketing tips for brands to create the valuable experience."
                personImg={Person}
                personName="Emre Murry"
                date="18.06.2022"
                readTime="5 mint read"
              >
                <span>Influencer Marketing</span>
              </BlogCard>
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

export default EventMarketing;

/* React Paginate */
/* 
localhost:3000/blog/blog1
ahmadali05
*/
