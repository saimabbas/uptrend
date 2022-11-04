import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import ImHeroImg from "../assets/img/expertise-hero-img.svg";
import WinnertrophyImg from "../assets/img/winner-trophy.png";
import SpeakerImg from "../assets/img/speaker-img-orange.png";
import PlatformLogo1 from "../assets/img/twitch-l.png";
import PlatformLogo2 from "../assets/img/twitter-l.png";
import PlatformLogo3 from "../assets/img/youtube-l.png";
import PlatformLogo4 from "../assets/img/snapchat-l.png";
import PlatformLogo5 from "../assets/img/weibo-l.png";
import PlatformLogo6 from "../assets/img/linkedin-l.png";
import PlatformLogo7 from "../assets/img/tiktok-l.png";
import PlatformLogo8 from "../assets/img/instagram-l.png";
import PlatformLogo9 from "../assets/img/facebook-l.png";
import PlatformLogo10 from "../assets/img/wechat-l.png";
import PlatformLogo11 from "../assets/img/kakaotalk-l.png";
import UTPartners from "../assets/img/ut-partners-img-red.png";
import IndustriesPlanetImg from "../assets/img/industries-planet.png";
import CrossPolinationImg from "../assets/img/cp-bee-img.webp";
import CPBeeImg from "../assets/img/cp-bee-img.png";
import PlatformStatsImg from "../assets/img/platform-stats-img.svg";
import BigThingsWave from "../assets/img/big-things-wave.svg";
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
import MoneyPlant from "../assets/img/money-plant.png";
import LogoDecentralized from "../assets/img/logo-decentralized.svg";
import DDDTopArrow from "../assets/img/3d-top-arrow.png";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import SdWhiteWave from "../assets/img/sd-white-wave.png";
import BoyMetaverse from "../assets/img/boy-experiencing-metaverse.png";
import RoundTree from "../assets/img/round-tree.png";
import MMSD4thImg from "../assets/img/mm-sd-4th-img.png";
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
import FuelBrandGrowthSwiper from "../components/FuelBrandGrowthSwiper";
import { Link } from "react-router-dom";

const Expertise = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const showIconsBox = () => {
    setIsIconsBoxShowing(!isIconsBoxShowing);
    setTimeout(() => {
      setIsIconsBoxShowing(false);
    }, 5000);
  };
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    ScrollSmoother,
    ScrambleTextPlugin
  );
  useEffect(() => {
    /* const heroHeadAimInit = () => {
      HH1BoxANim.play();
    }; */
    // Text Spliting
    const marketingHeading = new SplitText(".im-hero-headings h1", {
      type: "chars, words,lines",
    });
    const marketingHeadingChars = marketingHeading.chars;
    const marketingHeadingLines = marketingHeading.lines;
    const marketingHeadingWords = marketingHeading.words;

    let marketingLandingAnim = gsap.timeline({
      // onComplete: heroHeadAimInit,
    });
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
        ".head-box-black-inner",
        {
          width: 0,
        },
        {
          duration: 3,
          width: "100%",
          ease: Power1.easeInOut,
          left: 0,
        },
        "<0.5"
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
    /* var HH1BoxANim = gsap.timeline({
      repeat: -1,
      paused: true,
    });
    HH1BoxANim.fromTo(
      ".head-box-black-inner",
      {
        width: 0,
      },
      {
        duration: 3,
        width: "100%",
        ease: Power1.easeInOut,
        left: 0,
      }
    )
      .to(".head-box-black-inner", {
        duration: 0,
        left: "unset",
        right: 0,
      })
      .to(".head-box-black-inner", {
        duration: 3,
        width: 0,
        ease: Power1.easeInOut,
      }); */
    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid-1",
        start: "top 50%",
      },
    });
    homeExpertiseAnim
      .fromTo(
        ".sd-grid-card-1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        }
      )
      .fromTo(
        ".sd-grid-card-2",
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
        ".sd-grid-card-4",
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
        ".sd-grid-card-3",
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
        ".sb-box h5",
        {
          x: "-150%",
        },
        {
          duration: 0.5,
          x: 0,
        },
        "<0.5"
      )
      .fromTo(
        ".sb-box p",
        {
          x: "-150%",
        },
        {
          duration: 0.5,
          x: 0,
        },
        "<0"
      );
    /*  .fromTo(
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
      ); */

    let homeExpertiseAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid-2",
        start: "top 50%",
      },
    });
    homeExpertiseAnim2
      .fromTo(
        ".ir-sd-grid-card-1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        }
      )
      .fromTo(
        ".ir-sd-grid-card-2",
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
        ".ir-sd-grid-card-3",
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
        ".ir-sd-grid-card-4",
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
        ".ir-sd-grid-card-1 img",
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
        ".ir-sd-grid-card-1 h2",
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
        ".ir-sd-grid-card-1 h5",
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
        ".ir-sd-grid-card-2 img",
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
        ".ir-sd-grid-card-2 h2",
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
        ".ir-sd-grid-card-2 h6",
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
        ".ir-sd-grid-card-3 img",
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
        ".ir-sd-grid-card-3 h6",
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
        ".ir-sd-grid-card-4 img",
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
        ".ir-sd-grid-card-4 h2",
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
        ".ir-sd-grid-card-4 h6",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      ); */
    let homeExpertiseAnim3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid-3",
        start: "top 50%",
      },
    });
    homeExpertiseAnim3
      .fromTo(
        ".msgc1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
        }
      )
      .fromTo(
        ".msgc2",
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
        ".msgc3",
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
        ".msgc4",
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
        ".msgc1 img",
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
        ".msgc1 h5",
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
        ".msgc2 h3",
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
        ".msgc2 .egc2-img-grid",
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
        ".msgc3 h3",
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
        ".msgc3 ul",
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
        ".msgc4 img",
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
      <div className="loading-screen">
        <UTLogo color="#fff" />
      </div>
      <div className="expertise-page">
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
              <div className="im-hero-headings expertise-hero-headings">
                <h1>
                  Award-Winning Marketing Partner Deemed Skillful by{" "}
                  <span>
                    <i>FORTUNE</i>
                    {/* <b>FORTUNE</b> */}
                    <div className="head-box-black">
                      <div className="head-box-black-inner"></div>
                    </div>
                  </span>{" "}
                  500 Brands
                </h1>
                <h3>
                  Holistic solutions designed to accelerate growth potential
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
          <img
            loading="lazy"
            className="im-hero-img"
            src={ImHeroImg}
            alt="ImHeroImg"
          />
        </section>
        <section className="service-description-section" id="explore">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>INFLUENCER MARKETING</h2>
              <Link to="/influencermarketing">
                <a href="#" className="arrow-link">
                  <span>GET STARTED</span>
                  <MdArrowForward />
                </a>
              </Link>
            </div>
            <div className="service-description-grid service-description-grid-1">
              <div className="sd-grid-card sd-grid-card-1">
                <div className="sd-grid-card-1-bg"></div>
                <div className="sdgc1-details">
                  <h3>
                    <span> #1 INTERNATIONAL</span>
                    CONTENT STUDIO
                  </h3>
                  <div className="supported-by-box">
                    <h6>SUPPORTED BY</h6>
                    <div className="sb-box-grid">
                      <div className="sb-box">
                        <h5>120,000+</h5>
                        <p>target influencers</p>
                      </div>
                      <div className="sb-box">
                        <h5>in 185</h5>
                        <p>countries</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src={WinnertrophyImg}
                  alt="WinnertrophyImg"
                  x
                  className="winner-img-mob"
                />
              </div>
              <div className="sd-grid-card sd-grid-card-2">
                <div className="sd-grid-card-2-bg"></div>
                <div className="sdgc2-details">
                  <h3>
                    <span> ACROSS ALL</span>
                    PLATFORMS
                  </h3>
                  <img loading="lazy" src={SpeakerImg} alt="SpeakerImg" />
                </div>
                <div className="all-platforms-grid">
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo1}
                    alt="PlatformLogo1"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo2}
                    alt="PlatformLogo2"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo3}
                    alt="PlatformLogo3"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo4}
                    alt="PlatformLogo4"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo5}
                    alt="PlatformLogo5"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo6}
                    alt="PlatformLogo6"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo7}
                    alt="PlatformLogo7"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo8}
                    alt="PlatformLogo8"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo9}
                    alt="PlatformLogo9"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo10}
                    alt="PlatformLogo10"
                  />
                  <img
                    className="orange-box-icon"
                    loading="lazy"
                    src={PlatformLogo11}
                    alt="PlatformLogo11"
                  />
                </div>
              </div>
              <div className="sd-grid-card sd-grid-card-3">
                <div className="sd-grid-card-3-bg"></div>
                <img loading="lazy" src={UTPartners} alt="UTPartners" />
                <p className="ut-partners-username">@ricky</p>
                <div className="sdgc3-details">
                  <h3>
                    <span> UPTREND</span>
                    PARTNERS
                  </h3>
                  <div className="ut-tags">
                    <span>Influencers</span>
                    <span>Celebrities</span>
                    <span>Athletes</span>
                  </div>
                  <div className="ut-tags">
                    <span>Artists</span>
                    <span>Streamers</span>
                    <span>Producers</span>
                  </div>
                </div>
              </div>
              <div className="sd-grid-card sd-grid-card-4">
                <div className="sd-grid-card-4-bg"></div>
                <img
                  loading="lazy"
                  src={IndustriesPlanetImg}
                  alt="IndustriesPlanetImg"
                />
                <div className="sdgc3-details">
                  <h3>
                    <span> across all</span>
                    industries
                  </h3>
                  <div className="ut-tags">
                    <span>Technology</span>
                    <span>Crypto</span>
                    <span>Gaming</span>
                  </div>
                  <div className="ut-tags">
                    <span>E-commerce</span>
                    <span>Finance</span>
                    <span>Fashion</span>
                    <span>Metaverse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>INVESTOR RELATIONS</h2>
              <a href="/investmentrelationships" className="arrow-link">
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid service-description-grid-2">
              <div className="sd-grid-card ir-sd-grid-card-1">
                <div className="irgc-1-bg"></div>
                <img loading="lazy" src={MoneyPlant} alt="MoneyPlant" />
                <h2>18,000</h2>
                <h5>PRIVATE INVESTORS</h5>
              </div>
              <div className="sd-grid-card ir-sd-grid-card-2">
                <div className="irgc-3-bg"></div>
                <img loading="lazy" src={SdWhiteWave} alt="SdWhiteWave" />
                <h2>OUR RELATIONSHIPS</h2>
                <h6>SPAN OCEANS AND INDUSTRIES</h6>
              </div>
              <div className="sd-grid-card ir-sd-grid-card-3">
                <div className="irgc-3-bg"></div>
                <img loading="lazy" src={RoundTree} alt="RoundTree" />
                <h6>
                  We associate credible projects with strategic Venture Fund
                  partners to <b>assist with scaling and growth</b>
                </h6>
              </div>
              <div className="sd-grid-card ir-sd-grid-card-4">
                <div className="irgc-1-bg"></div>
                <img loading="lazy" src={DDDTopArrow} alt="DDDTopArrow" />
                <h2>Forge ahead</h2>
                <h6>
                  For entrepreneurs intent on building the next revolution
                </h6>
              </div>
            </div>
          </div>
        </section>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Metaverse Marketing</h2>
              <a href="/metaversemarketing" className="arrow-link">
                <span>Get Started </span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid service-description-grid-3">
              <div className="sd-grid-card mm-sd-grid-card-1 msgc1">
                <div className="msgc1-bg"></div>
                <img src={BoyMetaverse} alt="BoyMetaverse" />
                <h5>
                  Establish brands presence in the Metaverse with
                  <b> exclusive interactive experience</b>
                </h5>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-2 msgc2">
                <div className="msgc2-bg"></div>
                <h3>
                  <span> supporting</span>
                  leading platforms
                </h3>
                <div className="egc2-img-grid egc3-imgs">
                  <a href="https://decentraland.org/">
                    <img
                      loading="lazy"
                      src={LogoDecentralized}
                      alt="companyLogo"
                    />
                  </a>
                  <a href="https://www.sandbox.game/en/">
                    <img loading="lazy" src={companyLogo15} alt="companyLogo" />
                  </a>
                </div>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-3 msgc3">
                <div className="msgc3-bg"></div>
                <h3>
                  the evolution
                  <span> of marketing</span>
                </h3>
                <ul>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>
                    <p>Virtual Showrooms </p>
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
                    <p>Brand Events</p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>{" "}
                    <p>3D Models </p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                    </div>{" "}
                    <p>Web 3 Experience</p>
                  </li>
                </ul>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4 msgc4">
                <div className="msgc4-bg"></div>
                <img loading="lazy" src={MMSD4thImg} alt="MMSD4thImg" />
              </div>
            </div>
          </div>
        </section>
        <section className="Event-marketing-section bull-swiper-section">
          <div className="box">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                Event Marketing <br />
                <span>We shape memorable and impactful experiences</span>
              </h3>
              <a href="/eventmarketing" className="arrow-link">
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="Event-marketing-grid">
              <div className="EM-grid-left">
                <img
                  loading="lazy"
                  src={EventMarketingImg}
                  alt="EventMarketingImg"
                  className="event-marketing-desk"
                />
                <img
                  loading="lazy"
                  src={EventMarketingImgMob}
                  alt="EventMarketing"
                  className="event-marketing-mob"
                />
              </div>
              <div className="EM-grid-right">
                <div className="con-to-comp">
                  <h5>From concept to completion</h5>
                  <p>
                    we guide brands through event planning of <br /> any
                    magnitude
                  </p>
                </div>
                <div className="con-to-comp cc-margin-box">
                  <h5>Enhance attention surrounding iconic brands</h5>
                  <div className="con-to-comp-points">
                    <span>Brand Meetups and Conferences</span>
                    <span>Press Events </span>
                    <span>Web Panels</span>
                    <span>Live Streams</span>
                    <span>Online Webinars</span>
                  </div>
                </div>
                <div className="con-to-comp">
                  <h5>
                    <MdArrowUpward /> 277%
                  </h5>
                  <p>Organic Traffic</p>
                </div>
              </div>
            </div>
            <FuelBrandGrowthSwiper backedByLight={true} />
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

export default Expertise;
