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
import Person from "../assets/img/emre.png";
import Person1 from "../assets/img/donna.png";
import Person2 from "../assets/img/alex.png";
import Person3 from "../assets/img/sarah.png";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import JournalImg6 from "../assets/img/Journel-img-6.png";
import JournalImg5 from "../assets/img/Journel-img-5.png";
import JournalImg5Cat from "../assets/img/journal-img-5-cat.png";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import Lottie from "react-lottie";
import animationData from "./../assets/json/blog.json";
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
import { Link } from "react-router-dom";

const EventMarketing = () => {
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
        duration: 0.35,
        stagger: {
          each: 0.1,
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
                <h1>Uptrend Journal</h1>
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
        <div className="blog-content-wrapper"></div>
        <section className="service-description-section" id="explore">
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
                          <span>5 min read</span>
                        </div>
                      </div>
                      <div className="main-blog-grid-right">
                        <img src={JournalImg3} alt="JournalImg3" />
                      </div>
                    </div>
                    <div className="blog-cards-grid">
                      <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-In-2022">
                        <BlogCard
                          lightBlogCard={false}
                          blogImg={JournalImg2}
                          heading="3 Proven Strategies To Building Brand Awareness in 2022"
                          description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                          personImg={Person2}
                          personName="Alex Wanstein"
                          date="10.06.2022"
                          readTime="5 min read"
                        >
                          <span>Gaming</span>
                          <span>News</span>
                        </BlogCard>
                      </a>
                      <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                        <BlogCard
                          lightBlogCard={false}
                          blogImg={JournalImg1}
                          heading="Top 5 Influencer Marketing Software Solutions To Boost  Brand Growth In 2022 (Part 1)"
                          description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                          personImg={Person1}
                          personName="Donna Wanstein"
                          date="7.06.2022"
                          readTime="5 min read"
                        >
                          <span>Gaming</span>
                        </BlogCard>
                      </a>
                      <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-in-2022">
                        <BlogCard
                          lightBlogCard={false}
                          blogImg={JournalImg5Cat}
                          heading="3 Proven Strategies To Building Brand Awareness in 2022"
                          description="Explore proven brand-boosting strategies for social media that will allow your business to extend its reach broadly across the globe"
                          personImg={Person1}
                          personName="Donna Wanstein"
                          date="7.06.2022"
                          readTime="5 min read"
                        >
                          <span>News</span>
                        </BlogCard>
                      </a>
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
                <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-In-2022">
                  <BlogCard
                    lightBlogCard={true}
                    blogImg={JournalImg5}
                    heading="Top-5 Influencer Marketing Software Solutions To Boost Your Brand in 2022 (Part 2)"
                    personImg={Person1}
                    personName="Donna Wanstein"
                    date="12.06.2022"
                    readTime="10 min read"
                  >
                    <span>Gaming</span>
                  </BlogCard>
                </a>
                <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                  <BlogCard
                    lightBlogCard={true}
                    blogImg={JournalImg6}
                    heading="Top Regions With The Best Marketing Performance"
                    personImg={Person3}
                    personName="Sarah Evans"
                    date="18.06.2022"
                    readTime="5 min read"
                  >
                    <span>Gaming</span>
                  </BlogCard>
                </a>
              </div>
              <div className="blog-card-big">
                <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-in-2022">
                  <BlogCard
                    lightBlogCard={true}
                    blogImg={JournalImg4}
                    heading="New Local Region? Tips To Get Started"
                    description="The ultimate marketing plan for dominating local markets. Get the fundamental insights to impact your customers. We introduce essential marketing tips for brands to create the valuable experience."
                    personImg={Person}
                    personName="Emre Murry"
                    date="18.06.2022"
                    readTime="5 min read"
                  >
                    <span>Influencer Marketing</span>
                  </BlogCard>
                </a>
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

export default EventMarketing;

/* React Paginate */
/* 
localhost:3000/blog/blog1
ahmadali05
*/
