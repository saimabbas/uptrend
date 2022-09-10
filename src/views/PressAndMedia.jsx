import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "../styles/views/pressandmedia.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/pam-hero-img.svg";
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import PhotoImg from "../assets/img/photo-img.svg";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import KnotImg from "../assets/img/knot-img.svg";
import TrImg from "../assets/img/tr.svg";
import ECImg from "../assets/img/ec.svg";
import InPressImg1 from "../assets/img/in-press-img-1.svg";
import InPressImg2 from "../assets/img/in-press-img-2.svg";
import InPressImg3 from "../assets/img/in-press-img-3.svg";
import InPressImg4 from "../assets/img/in-press-img-4.svg";
import InPressImg5 from "../assets/img/in-press-img-5.svg";
import InPressImg6 from "../assets/img/in-press-img-6.svg";
import MOCRImg1 from "../assets/img/mocr-img-1.png";
import MOCRImg2 from "../assets/img/mocr-img-2.png";

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

const PressAndMedia = () => {
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
          text: "2.3",
          chars: "0 1 2 3 4 5 6 7 8 9",
          revealDelay: 0.5,
          speed: 1,
          delay: 3,
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
            delay: 3,
          },
        },
        0
      )
      .to(
        ".ps-box-3 h3 span",
        {
          duration: 3,
          scrambleText: {
            text: "448",
            chars: "0 1 2 3 4 5 6 7 8 9",
            revealDelay: 0.5,
            speed: 1,
            delay: 3,
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
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Press And Media</h1>
                <h3>
                  Uptrend experts sharing insights with leading journalists{" "}
                </h3>
              </div>
              <div className="im-hero-explore">
                <a href="#">
                  <span>explore</span>
                  <MdArrowDownward />
                </a>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="im-hero-img"
            src={EmHeroImg}
            alt="EmHeroImg"
          />
        </section>
        <section className="media-outlets">
          <div className="box">
            <div className="media-outlets-content">
              <div className="moc-left">
                <h3>Uptrend is featured by leading media outlets.</h3>
                <h6>
                  We value coverage of Uptrend and any associated partners.
                  Media journalists are welcome to use Uptrend logos, banners,
                  and more from our Media Kit.
                </h6>
              </div>
              <div className="moc-right">
                <div className="moc-right-card">
                  <img src={MOCRImg1} alt="MOCRImg1" />
                  <p>Uptrend Logo</p>
                </div>
                <div className="moc-right-card">
                  <img src={MOCRImg2} alt="MOCRImg2" />
                  <p>Mock Up</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="for-inquiries-box">
          <h6>
            For Inquiries, Please Contact <a href="#">Press@Uptrend.Agency</a>
          </h6>
        </div>
        <section className="ut-in-press">
          <div className="box">
            <div className="ut-in-press-content">
              <h3> UPTREND IN THE PRESS</h3>
              <div className="in-press-grid">
                <div className="in-press-grid-card">
                  <img src={InPressImg1} alt="InPressImg" />
                  <h6>
                    Uptrend Review 2022: The Leading Marketing Agency Deemed
                    Skillful By Fortune 500 Brands
                  </h6>
                  <p>
                    Uptrend is one of the leading marketing agencies in the
                    digital space. Let's take a look at Uptrend features and
                    competitive advantages.
                    <br />
                    <a href="https://www.businessinsider.com/">
                      https://www.businessinsider.com/
                    </a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <img src={InPressImg2} alt="InPressImg" />
                  <h6>
                    Uptrend Establishes Virtual Office Inside the Metaverse,
                    Visit It Today!
                  </h6>
                  <p>
                    The exclusive Uptrend virtual office in The Sandbox shows
                    brands how they can get involved in Web 3
                    <br />
                    <a href="https://www.newsbtc.com/">
                      https://www.newsbtc.com/
                    </a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <img src={InPressImg3} alt="InPressImg" />
                  <h6>
                    Uptrend Research: Top 10 Luxury Fashion Brands Embracing The
                    Metaverse
                  </h6>
                  <p>
                    We round up the best examples of luxury brands embracing a
                    virtual interactive experience to engage the audience within
                    leading metaverses
                    <br />
                    <a href="https://thenewsmansion.com/">
                      https://thenewsmansion.com/
                    </a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <img src={InPressImg4} alt="InPressImg" />
                  <h6>
                    Uptrend Research: Top 5 Most Popular Assets In The
                    Decentraland Metaverse
                  </h6>
                  <p>
                    Uptrend experts have prepared a virtual runway showing off
                    the best-selling fashion assets produced by the industry's
                    top fashion brands.
                    <br />
                    <a href="https://apnews.com/">https://apnews.com/</a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <img src={InPressImg5} alt="InPressImg" />
                  <h6>
                    How To Choose A Results-Driven Marketing Agency: A Complete
                    Guide Designed By Uptrend
                  </h6>
                  <p>
                    Picking the right partner can make a major difference in the
                    success of a marketing campaign. Learn how to spot the signs
                    of a reputable marketing agency.
                    <br />
                    <a href="https://news.yahoo.com/">
                      https://news.yahoo.com/
                    </a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <img src={InPressImg6} alt="InPressImg" />
                  <h6>3 Proven Twitter Strategies for Brand Growth in 2022</h6>
                  <p>
                    Uptrend social media experts have put together five
                    effective strategies for driving engagement and audience
                    growth on Twitter.
                    <br />
                    <a href="https://u.today/">https://u.today/</a>
                  </p>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
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
                  <div></div>
                  <button>SUBSCRIBE TO OUR JOURNAL</button>
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

export default PressAndMedia;
