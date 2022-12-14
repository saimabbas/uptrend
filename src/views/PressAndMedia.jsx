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
import BullElevatorImg from "../assets/img/bull-elevator-img-2.png";
import PhotoImg from "../assets/img/photo-img.png";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import KnotImg from "../assets/img/knot-img.png";
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
import animationData from "./../assets/json/press-and-media.json";

const PressAndMedia = () => {
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
        trigger: ".ut-in-press",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".in-press-grid-card",
      {
        opacity: 0,
        y: "10rem",
        scale: 0.85,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: {
          each: 0.085,
        },
      }
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
                <h1>Press And Media</h1>
                <h3>
                  Uptrend experts sharing insights with leading journalists{" "}
                </h3>
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
          <div className="im-hero-img im-hero-img-r">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="media-outlets" id="explore">
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
                  <a href="https://drive.google.com/file/d/1M0Zwc4-yueQPkHeA0LCfVdDwjthigOwl/view?usp=sharing">
                    <img src={MOCRImg1} alt="MOCRImg1" />
                  </a>
                  <p>Uptrend Logo</p>
                </div>
                <div className="moc-right-card">
                  <a href="https://drive.google.com/file/d/1DZUm4rQT2u6TtObvqQqHR1lBbSVBZdUC/view?usp=sharing">
                    <img src={MOCRImg2} alt="MOCRImg2" />
                  </a>
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
                  <div>
                    <img src={InPressImg1} alt="InPressImg" />
                    <h6>
                      Uptrend Review 2022: The Leading Marketing Agency Deemed
                      Skillful By Fortune 500 Brands
                    </h6>
                    <p>
                      Uptrend is one of the leading marketing agencies in the
                      digital space. Let's take a look at Uptrend features and
                      competitive advantages.
                      {/* <br />
                    <a href="https://www.businessinsider.com/">
                      https://www.businessinsider.com/
                    </a> */}
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <div>
                    <img src={InPressImg2} alt="InPressImg" />
                    <h6>
                      Uptrend Establishes Virtual Office Inside the Metaverse,
                      Visit It Today!
                    </h6>
                    <p>
                      The exclusive Uptrend virtual office in The Sandbox shows
                      brands how they can get involved in Web 3
                      {/* <br />
                    <a href="https://www.newsbtc.com/">
                      https://www.newsbtc.com/
                    </a> */}
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <div>
                    <img src={InPressImg3} alt="InPressImg" />
                    <h6>
                      Uptrend Research: Top 10 Luxury Fashion Brands Embracing
                      The Metaverse
                    </h6>
                    <p>
                      We round up the best examples of luxury brands embracing a
                      virtual interactive experience to engage the audience
                      within leading metaverses
                      {/* <br />
                    <a href="https://thenewsmansion.com/">
                      https://thenewsmansion.com/
                    </a> */}
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <div>
                    <img src={InPressImg4} alt="InPressImg" />
                    <h6>
                      Uptrend Research: Top 5 Most Popular Assets In The
                      Decentraland Metaverse
                    </h6>
                    <p>
                      Uptrend experts have prepared a virtual runway showing off
                      the best-selling fashion assets produced by the industry's
                      top fashion brands.
                      {/* <br />
                    <a href="https://apnews.com/">https://apnews.com/</a> */}
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <div>
                    <img src={InPressImg5} alt="InPressImg" />
                    <h6>
                      How To Choose A Results-Driven Marketing Agency: A
                      Complete Guide Designed By Uptrend
                    </h6>
                    <p>
                      Picking the right partner can make a major difference in
                      the success of a marketing campaign. Learn how to spot the
                      signs of a reputable marketing agency.
                      {/* <br />
                    <a href="https://news.yahoo.com/">
                      https://news.yahoo.com/
                    </a> */}
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span>READ MORE</span>
                    <MdArrowForward />
                  </a>
                </div>
                <div className="in-press-grid-card">
                  <div>
                    <img src={InPressImg6} alt="InPressImg" />
                    <h6>
                      3 Proven Twitter Strategies for Brand Growth in 2022
                    </h6>
                    <p>
                      Uptrend social media experts have put together five
                      effective strategies for driving engagement and audience
                      growth on Twitter.
                      {/* <br />
                    <a href="https://u.today/">https://u.today/</a> */}
                    </p>
                  </div>
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

export default PressAndMedia;
