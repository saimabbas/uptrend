import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import HeroBull from "../assets/img/hero-bull.png";
import HeroBlueOverlay from "../assets/img/hero-blue-overlay.svg";
import companyLogo2 from "../assets/img/logo-swissborg.svg";
import companyLogo8 from "../assets/img/logo-compound.svg";
import companyLogo14 from "../assets/img/logo-meta.png";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import companyLogo16 from "../assets/img/logo-kephi.svg";
import companyLogo17 from "../assets/img/logo-bitcoinist.svg";
import companyLogo18 from "../assets/img/logo-tct.svg";
import OurMissionImg from "../assets/img/our-mission-img.png";
import OMGreenBig from "../assets/img/om-green-big.png";
import OMGreenSmall from "../assets/img/om-green-small.png";
import OMBlueSmall from "../assets/img/om-blue-small.png";
import OMBlueBig from "../assets/img/om-blue-big.png";
import OMText from "../assets/img/om-text.png";
import MissionIcon1 from "../assets/img/mission-icon-1.svg";
import MissionIcon2 from "../assets/img/mission-icon-2.svg";
import MissionIcon3 from "../assets/img/mission-icon-3.svg";
import OnlineMeeting from "../assets/img/online-meeting.png";
import MaleInfluencer from "../assets/img/male-social-media-influencer.png";
import IconTwitterFilled from "../assets/img/icon-twitter-filled.svg";
import Nico from "../assets/img/nico.png";
import Tony from "../assets/img/tony.png";
import Danny from "../assets/img/danny.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import UTNFTImg1 from "../assets/img/ut-nft-1.png";
import UTNFTImg2 from "../assets/img/ut-nft-2.png";
import UTNFTImg3 from "../assets/img/ut-nft-3.png";
import UTNFTImg4 from "../assets/img/ut-nft-4.png";
import NFTProfileImg1 from "../assets/img/nft-profile-1.png";
import NFTProfileImg2 from "../assets/img/nft-profile-2.png";
import NFTProfileImg3 from "../assets/img/nft-profile-3.png";
import NFTProfileImg4 from "../assets/img/nft-profile-4.png";
import JournalImg1 from "../assets/img/journal-img-1.png";
import JournalImg2 from "../assets/img/journal-img-2.png";
import JournalImg3 from "../assets/img/journal-img-3.png";
import JournalImg4 from "../assets/img/journal-img-4.png";
import JournalImg5 from "../assets/img/journal-img-5.png";
import IconDiamond from "../assets/img/icon-diamond.svg";
import StorefrontImg from "../assets/img/storefront-img.png";
import LimitedEditionImg from "../assets/img/limited-edition-img.svg";
import UtStoreWave from "../assets/img/ut-store-wave.svg";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
import NFTGal1 from "../assets/img/nft-gall-1.png";
import NFTGal2 from "../assets/img/nft-gall-2.png";
import NFTGal3 from "../assets/img/nft-gall-3.png";
import NFTGal4 from "../assets/img/nft-gall-4.png";
import NFTGal5 from "../assets/img/nft-gall-5.png";
import NFTGal6 from "../assets/img/nftgal6.png";

// Icons
import {
  MdArrowForward,
  MdArrowDropDown,
  MdEast,
  MdWest,
} from "react-icons/md";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import { Autoplay, FreeMode, Navigation } from "swiper";
import Footer from "../components/Footer";
import TrustedByCompanies from "../components/TrustedByCompanies";
import UpTrendsEvents from "../components/UpTrendsEvents";
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
import UTLogo from "../assets/icons/UTLogo";
import $ from "jquery";
import { Link } from "react-router-dom";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(true);
  const showIconsBox = () => {
    setIsIconsBoxShowing(!isIconsBoxShowing);
  };
  useEffect(() => {
    /* const heroHeadAimInit = () => {
      HH1BoxANim.play();
    }; */
    // Text Spliting
    const HomeHeroHeading = new SplitText(".hero-content h1", {
      type: "chars, words,lines",
    });
    const HomeHeroHeadingChars = HomeHeroHeading.chars;
    const HomeHeroHeadingLines = HomeHeroHeading.lines;
    const HomeHeroHeadingWords = HomeHeroHeading.words;
    const UTStoreHead = new SplitText(".ut-store-details h2", {
      type: "chars, words,lines",
    });
    const UTStoreHeadChars = UTStoreHead.chars;
    const UTStoreHeadWords = UTStoreHead.words;
    const RTSHeading = new SplitText(".rts-form h3", {
      type: "words,lines",
    });
    const RTSHeadingWords = RTSHeading.words;
    const RTSHeadingLines = RTSHeading.lines;

    /* var HH1BoxANim = gsap.timeline({
      repeat: -1,
      paused: true,
    });
    HH1BoxANim.fromTo(
      ".head-box-green-inner",
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
      .to(".head-box-green-inner", {
        duration: 0,
        left: "unset",
        right: 0,
      })
      .to(".head-box-green-inner", {
        duration: 3,
        width: 0,
        ease: Power1.easeInOut,
      }); */
    let homeLandingAnim = gsap.timeline({
      // onComplete: heroHeadAimInit,
    });
    homeLandingAnim
      .fromTo(
        ".loading-screen",
        {
          opacity: "1",
        },
        {
          opacity: "0",
          delay: 1,
          duration: 0.25,
          ease: Linear.easeInOut,
        }
      )

      .fromTo(
        HomeHeroHeadingLines,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.05,
            from: "start",
          },
          ease: Power4.easeInOut,
        }
      )
      .fromTo(
        ".hero-bull",
        {
          opacity: 0,
          y: 100,
          x: 100,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 2,
          ease: Power4.easeInOut,
        },
        "<0"
      )

      .fromTo(
        ".head-box-green-inner",
        {
          width: 0,
        },
        {
          duration: 3,
          width: "100%",
          ease: Power1.easeInOut,
          left: 0,
        },
        "0.25"
      )
      .fromTo(
        ".hero-company-logo-box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: Power4.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".hero-icons-line-box a",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: "start",
          },
          ease: Power4.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".hero-icons-line-box > div",
        {
          height: 0,
        },
        {
          height: "7.5rem",
          duration: 1,
          ease: Power4.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".hero-blue-overlay",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: Linear.easeInOut,
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
    /* $(window).on("load", function () {
      homeLandingAnim.play();
    }); */
    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".expertise-section",
        start: "top 50%",
      },
    });
    homeExpertiseAnim.fromTo(
      ".expertise-grid-card",
      {
        opacity: 0,
        // y: 100,
        scale: 0.85,
      },
      {
        // y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: Linear.easeInOut,
        stagger: {
          ease: Linear.easeInOut,
          each: 0.1,
        },
      }
    );
    let highlyRegardedAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".highly-regarded-section",
        start: "top 50%",
      },
    });
    highlyRegardedAnim.fromTo(
      ".highly-regarded-grid-card",
      {
        opacity: 0,
        // y: 100,
        scale: 0.85,
      },
      {
        // y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: Linear.easeInOut,
        stagger: {
          ease: Linear.easeInOut,
          each: 0.15,
        },
      }
    );
    let uptrendStoreAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".ut-store-section",
        start: "top 50%",
      },
    });
    uptrendStoreAnim
      .fromTo(
        UTStoreHeadChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          stagger: {
            each: 0.1,
            from: "center",
          },
        }
      )
      .fromTo(
        ".ut-store-details > div",
        {
          width: 0,
        },
        {
          duration: 0.5,
          width: "17.5rem",
        },
        "<0.5"
      )
      .fromTo(
        ".ut-store-details button",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          scale: 1,
          duration: 0.5,
          opacity: 1,
        },
        "<0"
      );
    let readyToStartAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".ready-to-start-section",
        start: "top 50%",
      },
    });
    readyToStartAnim
      .fromTo(
        RTSHeadingWords,
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: {
            each: 0.085,
          },
        }
      )
      .fromTo(
        ".rts-form-grid",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.15,
        }
      );
    let ourMissionAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-mission-section",
        start: "top 65%",
      },
    });
    ourMissionAnim
      .fromTo(
        ".om-blue-big",
        {
          opacity: 0,
          transform: "translate(50%, 0)",
        },
        {
          transform: "translate(0%, 0)",
          duration: 1,
          opacity: 1,
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        ".om-green-big",
        {
          opacity: 0,
          transform: "translate(-50%, 0)",
        },
        {
          transform: "translate(0%, 0)",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".om-green-small",
        {
          transform: "translate(5rem, -5rem)",
          opacity: 0,
        },
        {
          transform: "translate(0, 0)",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0.5"
      )
      .fromTo(
        ".om-blue-small",
        {
          transform: "translate(-5rem, -2rem)",
          opacity: 0,
        },
        {
          transform: "translate(0, 0)",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".om-text",
        {
          transform: "translate(-50%, 150%)",
          opacity: 0,
        },
        {
          transform: "translate(-50%, 100%)",
          opacity: 1,
          duration: 1,
          ease: Back.easeInOut,
        },
        "<0.15"
      );
    let headerBGAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 0",
        end: "bottom 80%",
        scrub: 1,
      },
    });
    headerBGAnim.fromTo(
      ".home-page header",
      {
        backgroundColor: "rgba(16, 18, 22, 0)",
      },
      {
        backgroundColor: "rgba(16, 18, 22, 1)",
      }
    );
  }, []);

  return (
    <main className="app">
      <div className="loading-screen">
        <UTLogo color="#fff" />
      </div>
      <div className="home-page">
        <Header lightHeader={true} showIconsBox={showIconsBox} />

        <section className="hero-section">
          <img className="hero-bull" src={HeroBull} alt="HeroBull" />
          <img
            className="hero-blue-overlay"
            src={HeroBlueOverlay}
            alt="HeroBlueOverlay"
          />
          <div className="box">
            <div className="hero-content">
              <div></div>
              <h1>
                LEADING MARKETING <br className="hero-head-mob-br" /> PARTNER{" "}
                <br className="hero-head-pc-br" /> BUILDING
                <br className="hero-head-mob-br" />
                <span>
                  <div className="head-box-green">
                    <div className="head-box-green-inner"></div>
                  </div>
                  <i>BRAND IMPACT</i>
                </span>
              </h1>
              {isIconsBoxShowing ? (
                <div className="hero-icons-line-box hero-icons-line-box-dark">
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
              <TrustedByCompanies trustedByLight={true} />
            </div>
          </div>
        </section>
        <section className="our-mission-section">
          <div className="box">
            <div className="our-mission-content">
              <div className="our-mission-left">
                <div className="our-mission-img-box">
                  <img
                    className="om-main-img"
                    loading="lazy"
                    src={OurMissionImg}
                    alt="OurMissionImg"
                  />
                  <img
                    className="om-green-big"
                    loading="lazy"
                    src={OMGreenBig}
                    alt="OMGreenBig"
                  />
                  <img
                    className="om-green-small"
                    loading="lazy"
                    src={OMGreenSmall}
                    alt="OMGreenSmall"
                  />
                  <img
                    className="om-blue-big"
                    loading="lazy"
                    src={OMBlueBig}
                    alt="OMBlueBig"
                  />
                  <img
                    className="om-blue-small"
                    loading="lazy"
                    src={OMBlueSmall}
                    alt="OMBlueSmall"
                  />
                  <img
                    className="om-text"
                    loading="lazy"
                    src={OMText}
                    alt="OMText"
                  />
                </div>
              </div>
              <div className="our-mission-right">
                <h2>Our Mission</h2>
                <div className="mission-text-img-box">
                  <img loading="lazy" src={MissionIcon1} alt="MissionIcon1" />
                  <h5>
                    Enable <b>industry solutions</b> designed for innovators
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img loading="lazy" src={MissionIcon2} alt="MissionIcon2" />
                  <h5>
                    Become the premier <b>marketing trendsetter</b>
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img loading="lazy" src={MissionIcon3} alt="MissionIcon3" />
                  <h5>
                    Leverage <b>data science</b> to deliver results{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="expertise-section">
          <div className="box box-p">
            <h2 className="expertise-heading">EXPERTISE</h2>
            <div className="expertise-grid">
              <div className="expertise-grid-card expertise-grid-card-1 ddd-cube-p">
                <div className="egc1-top">
                  <div>
                    <a target={"_blank"} href="/influencermarketing">
                      Influencer <br />
                    </a>
                    <span>Marketing</span>
                  </div>

                  <img
                    loading="lazy"
                    src={MaleInfluencer}
                    alt="MaleInfluencer"
                  />
                </div>
                <h5>
                  #1 international content studio supported by{" "}
                  <b>120,000+ target influencers</b> in 185 countries
                </h5>
              </div>

              <div className="expertise-grid-card expertise-grid-card-2 ddd-cube-p">
                <div>
                  <a target={"_blank"} href="/metaversemarketing">
                    metaverse <br />
                  </a>
                  <span>promotion</span>
                </div>
                <h5>
                  Establish brand presence in the Metaverse{" "}
                  <b>with interactive experiences</b>
                </h5>
                <div className="egc2-img-grid">
                  <a target={"_blank"} href="https://www.meta.com/">
                    <img
                      loading="lazy"
                      src={companyLogo14}
                      alt="companyLogo14"
                    />
                  </a>
                  <a target={"_blank"} href="https://www.sandbox.game/en/">
                    <img
                      loading="lazy"
                      src={companyLogo15}
                      alt="companyLogo11"
                    />
                  </a>
                </div>
              </div>

              <div className="expertise-grid-card expertise-grid-card-2 ddd-cube-p">
                <div>
                  <a target={"_blank"} href="/investmentrelationships">
                    Investor <br />
                  </a>
                  <span>Relations</span>
                </div>
                <h5>
                  Uptrend Venture partners assist brands with{" "}
                  <b>scaling and growth</b>
                </h5>
                <div className="egc2-img-grid egc2-imgs">
                  <img loading="lazy" src={companyLogo2} alt="companyLogo14" />
                  <img loading="lazy" src={companyLogo8} alt="companyLogo11" />
                </div>
              </div>
              <div className="expertise-grid-card expertise-grid-card-1 ddd-cube-p">
                <div className="egc1-top">
                  <div>
                    <a target={"_blank"} href="/eventmarketing">
                      EVENT <br />
                    </a>
                    <span>MARKETING</span>
                  </div>
                  <img loading="lazy" src={OnlineMeeting} alt="OnlineMeeting" />
                </div>
                <h5>
                  <b>We guide brands</b> through event planning of any magnitude
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="twitter-section">
          <div className="box box-p">
            <div className="section-heading-box">
              <div className="up-twitter-name">
                <a href="https://twitter.com/UptrendAgency">
                  <img
                    loading="lazy"
                    src={IconTwitterFilled}
                    alt="IconTwitterFilled"
                  />
                </a>
                <p>@UptrendAgency</p>
              </div>
              <button className="ut-btn-md ut-btn-lightgray">FOLLOW</button>
            </div>
            <div className="tweets-main-grid">
              <div className="big-tweet">
                <h4>
                  🎎 Uptrend is a squad of growth leads, creatives, designers,
                  marketers, and influencers who collaborate to unlock growth
                  for iconic brands and startups.
                </h4>
                <p>12 HOURS AGO</p>
              </div>
              <div className="small-tweets-grid">
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>1 WEEK AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>2 weeks AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
              </div>
            </div>
            <div className="tweets-main-grid-swiper">
              <span className="fm-prev">
                <MdWest />
              </span>
              <div className="tweets-main-grid-swiper-box">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={"1"}
                  modules={[Navigation]}
                  className="mySwiper"
                  speed={750}
                  navigation={{
                    nextEl: ".fm-next",
                    prevEl: ".fm-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="small-tweets-grid-card">
                      <h6>
                        🎎 Uptrend is a squad of growth leads, creatives,
                        designers, marketers, and influencers who collaborate to
                        unlock growth for iconic brands and startups.
                      </h6>
                      <p>1 WEEK AGO</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="small-tweets-grid-card">
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        🎎 Uptrend is a squad of growth leads, creatives,
                        designers, marketers, and influencers .
                      </h6>
                      <p>1 WEEK AGO</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="small-tweets-grid-card">
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        🎎 Uptrend is a squad of growth leads, creatives,
                        designers, marketers, and influencers .
                      </h6>
                      <p>1 WEEK AGO</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="small-tweets-grid-card">
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        🎎 Uptrend is a squad of growth leads, creatives,
                        designers, marketers, and influencers .
                      </h6>
                      <p>1 WEEK AGO</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="small-tweets-grid-card">
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        🎎 Uptrend is a squad of growth leads, creatives,
                        designers, marketers, and influencers .
                      </h6>
                      <p>1 WEEK AGO</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <span className="fm-next">
                <MdEast />
              </span>
            </div>
          </div>
        </section>
        <BackedByLogosSwiper backedByLight={false} />
        <section className="highly-regarded-section">
          <div className="box box-p">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                highly regarded <br />
                <span>by industry partners</span>
              </h3>
            </div>
            <div className="highly-regarded-grid">
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Nico} alt="Nico" />
                    <div className="hrgc-head-name">
                      <a href="https://twitter.com/NicoVerderosa">
                        <h4>Nico Verderosa </h4>
                      </a>
                      <a href="https://twitter.com/Mighty_PirateTM">
                        <h6>@Mighty_PirateTM</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <a href="https://www.kephi.io/">
                      <img
                        loading="lazy"
                        src={companyLogo16}
                        alt="companyLogo16"
                      />
                    </a>
                    <div className="hrgc-head-name">
                      <a href="https://www.kephi.io/">
                        <h6>Kephi Gallery</h6>
                      </a>
                      <a href="https://twitter.com/TheCryptoLes">
                        <p>Chief Operation Officer</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Tony} alt="Tony" />
                    <div className="hrgc-head-name">
                      <a href="https://twitter.com/tonyspilotroBTC">
                        <h4>Tony Spilotro </h4>
                      </a>
                      <a href="https://twitter.com/tonyspilotroBTC">
                        <h6>@tonyspilotroBTC</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    I had the pleasure of working with the Uptrend team on
                    various marketing projects. The agency took my projects very
                    seriously and worked closely to achieve my unique KPIs. I
                    highly recommend them and look forward to working with
                    Uptrend on my next major project.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <a href="https://bitcoinist.com/">
                      <img
                        loading="lazy"
                        src={companyLogo17}
                        alt="companyLogo17"
                      />
                    </a>
                    <div className="hrgc-head-name">
                      <a href="https://bitcoinist.com/">
                        <h6>Bitcoinist</h6>
                      </a>
                      <p>Editorial Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Danny} alt="Danny" />
                    <div className="hrgc-head-name">
                      <a href="https://twitter.com/TheCryptoLes">
                        <h4>Danny Les </h4>
                      </a>
                      <a href="https://twitter.com/TheCryptoLes">
                        <h6>@TheCryptoLes</h6>
                      </a>
                    </div>
                  </div>
                  <h6>
                    When working on more complex contracts we are often required
                    to seek external support. On many occasions we have enlisted
                    the assistance of Uptrend. We have always found them to be
                    professional and incredibly efficient and our clients are
                    always happy at the conclusion of the engagement.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <a href="https://twitter.com/thecontenttap">
                      <img
                        loading="lazy"
                        src={companyLogo18}
                        alt="companyLogo18"
                      />
                    </a>
                    <div className="hrgc-head-name">
                      <a href="https://twitter.com/thecontenttap">
                        <h6>Content Tap</h6>
                      </a>
                      <p>Founder of The Content Tap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="highly-regarded-grid-swiper">
              <span className="hr-prev">
                <MdWest />
              </span>
              <div className="highly-regarded-grid-swiper-box">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={"1"}
                  modules={[Navigation]}
                  className="mySwiper"
                  speed={750}
                  navigation={{
                    nextEl: ".hr-next",
                    prevEl: ".hr-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="highly-regarded-grid-card">
                      <div className="hrgc-top">
                        <div className="hrgc-head">
                          <img loading="lazy" src={Nico} alt="Nico" />
                          <div className="hrgc-head-name">
                            <a href="https://twitter.com/NicoVerderosa">
                              <h4>Nico Verderosa </h4>
                            </a>
                            <a href="https://twitter.com/Mighty_PirateTM">
                              <h6>@Mighty_PirateTM</h6>
                            </a>
                          </div>
                        </div>
                        <h6>
                          Choosing Uptrend to handle our marketing campaign, was
                          one of the best decisions we could make. Their service
                          was really efficient and they got us a great deal with
                          top influencers.
                        </h6>
                      </div>
                      <div className="hrgc-bottom">
                        <div className="hrgc-head">
                          <a href="https://www.kephi.io/">
                            <img
                              loading="lazy"
                              src={companyLogo16}
                              alt="companyLogo16"
                            />
                          </a>
                          <div className="hrgc-head-name">
                            <a href="https://www.kephi.io/">
                              <h6>Kephi Gallery</h6>
                            </a>
                            <p>Chief Operation Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="highly-regarded-grid-card">
                      <div className="hrgc-top">
                        <div className="hrgc-head">
                          <img loading="lazy" src={Tony} alt="Tony" />
                          <div className="hrgc-head-name">
                            <a href="https://twitter.com/tonyspilotroBTC">
                              <h4>Tony Spilotro </h4>
                            </a>
                            <a href="https://twitter.com/tonyspilotroBTC">
                              <h6>@tonyspilotroBTC</h6>
                            </a>
                          </div>
                        </div>
                        <h6>
                          I had the pleasure of working with the Uptrend team on
                          various marketing projects. The agency took my
                          projects very seriously and worked closely to achieve
                          my unique KPIs. I highly recommend them and look
                          forward to working with Uptrend on my next major
                          project.
                        </h6>
                      </div>
                      <div className="hrgc-bottom">
                        <div className="hrgc-head">
                          <a href="https://bitcoinist.com/">
                            <img
                              loading="lazy"
                              src={companyLogo17}
                              alt="companyLogo17"
                            />
                          </a>
                          <div className="hrgc-head-name">
                            <a href="https://bitcoinist.com/">
                              <h6>Bitcoinist</h6>
                            </a>
                            <p>Editorial Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="highly-regarded-grid-card">
                      <div className="hrgc-top">
                        <div className="hrgc-head">
                          <img loading="lazy" src={Danny} alt="Danny" />
                          <div className="hrgc-head-name">
                            <a href="https://twitter.com/TheCryptoLes">
                              <h4>Danny Les </h4>
                            </a>
                            <a href="https://twitter.com/TheCryptoLes">
                              <h6>@bTheCryptoLes</h6>
                            </a>
                          </div>
                        </div>
                        <h6>
                          When working on more complex contracts we are often
                          required to seek external support. On many occasions
                          we have enlisted the assistance of Uptrend. We have
                          always found them to be professional and incredibly
                          efficient and our clients are always happy at the
                          conclusion of the engagement.
                        </h6>
                      </div>
                      <div className="hrgc-bottom">
                        <div className="hrgc-head">
                          <a href="https://twitter.com/thecontenttap">
                            <img
                              loading="lazy"
                              src={companyLogo18}
                              alt="companyLogo18"
                            />
                          </a>
                          <div className="hrgc-head-name">
                            <a href="https://twitter.com/thecontenttap">
                              <h6>Content Tap</h6>
                            </a>
                            <p>Founder of The Content Tap</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <span className="hr-next">
                <MdEast />
              </span>
            </div>
          </div>
        </section>
        <section className="events-section">
          <div className="box">
            <UpTrendsEvents />
          </div>
        </section>
        <section className="ready-to-start-section">
          <div className="box">
            <div className="rts-content">
              <div className="rts-form">
                <h3>
                  Ready to start a <br /> new Uptrend?
                </h3>
                <div className="rts-form-grid">
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Company Email"
                    required
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Telegram or Whatsapp"
                    required
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Website"
                    required
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="How can we lend a helping hand?"
                    required
                  />
                </div>
                <p className="error-msg">We need more info</p>
                <button className="ut-btn-green">SEND</button>
              </div>
              <div className="bull-elevator-img-box">
                <img
                  loading="lazy"
                  src={BullElevatorImg}
                  alt="BullElevatorImg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="uptrend-nfts-section">
          <div className="box">
            <div className="section-heading-box">
              <div>
                <h3 className="head-subhead">Uptrend NFTs</h3>
                <p>
                  Art evokes self-expression and deep thought. We support
                  digital artists and collect exclusive NFTs that showcase our
                  ideals
                </p>
              </div>
            </div>
            <div className="ut-nfts-swiper">
              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
                loop={true}
                speed={5000}
                autoplay={{
                  delay: 1,
                }}
              >
                <SwiperSlide>
                  <div className="nft-gallery-content-1">
                    <img src={NFTGal2} alt="NFT" />
                    <div className="nft-para-1">
                      <h5>UPTREND PLANET</h5>
                      <p>0.125 ETH</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-gallery-content-1">
                    <img src={NFTGal3} alt="NFT" />
                    <div className="nft-para-1">
                      <h5>UPTREND PORTAL</h5>
                      <p>0.12 ETH</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-gallery-content-1">
                    <img src={NFTGal4} alt="NFT" />
                    <div className="nft-para-1">
                      <h5>UPTREND ISLAND</h5>
                      <p>0.12 ETH</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-gallery-content-1">
                    <img src={NFTGal5} alt="NFT" />
                    <div className="nft-para-1">
                      <h5>UPTREND BULL</h5>
                      <p>0.2 ETH</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="ut-store-section">
          <img loading="lazy" src={StorefrontImg} alt="StorefrontImg" />
          <div className="ut-store-details">
            <h2>UPTREND STORE</h2>
            <div>
              <img src={LimitedEditionImg} alt="LimitedEditionImg" />
            </div>

            <a href="/uptrendstore">
              {" "}
              <button className="ut-btn-green">SHOW IT!</button>
            </a>
          </div>
          <div className="ut-store-wave-box">
            <img loading="lazy" src={UtStoreWave} alt="UtStoreWave" />
            <a href="/sandbox">
              <MdArrowForward />

              <h2>
                <span>OFFICE IN</span> <br />
                SANDBOX
              </h2>
            </a>
            <div className="box ut-store-right-arrow">
              <a href="/sandbox">
                <MdArrowForward />
              </a>
            </div>
          </div>
        </section>
        <section className="ut-journal-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Uptrend Journal</h2>
              <a href="/blog">
                <a href="#" className="arrow-link">
                  <span>READ MORE </span>
                  <MdArrowForward />
                </a>
              </a>
            </div>
            <div className="journal-grid">
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                <div className="journal-grid-card">
                  <div className="jgc-img-box">
                    <img loading="lazy" src={JournalImg1} alt="JournalImg1" />
                  </div>
                  <div className="jgc-details">
                    <h6>
                      Working With Leading YouTube Influencers: A How To Guide
                    </h6>
                  </div>
                </div>
              </a>
              <a href="/Blog/3-Proven-Strategies-To-Building-Brand-Awareness-In-2022">
                <div className="journal-grid-card">
                  <div className="jgc-img-box">
                    <img loading="lazy" src={JournalImg2} alt="JournalImg2" />
                  </div>
                  <div className="jgc-details">
                    <h6>
                      3 Proven Strategies To Building Brand Awareness in 2022
                    </h6>
                  </div>
                </div>
              </a>
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                <div className="journal-grid-card">
                  <div className="jgc-img-box">
                    <img loading="lazy" src={JournalImg3} alt="JournalImg" />
                  </div>
                  <div className="jgc-details">
                    <h6>
                      Top 5 Influencer Marketing Software Solutions To Boost
                      Brand Growth In 2022 (Part 1)
                    </h6>
                    <p>
                      Check out this comprehensive guide to discovering the most
                      powerful influencers using popular influencer marketing
                      software based on Uptrend’s insights and experience.
                    </p>
                  </div>
                </div>
              </a>
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                <div className="journal-grid-card">
                  <div className="jgc-img-box">
                    <img loading="lazy" src={JournalImg4} alt="JournalImg" />
                  </div>
                  <div className="jgc-details">
                    <h6>New Local Region? Tips To Get Started</h6>
                  </div>
                </div>{" "}
              </a>
              <a href="/Blog/Top-5-Influencer-Marketing-Software-Solutions-To-Boost-Brand-Growth-In-2022">
                <div className="journal-grid-card">
                  <div className="jgc-img-box">
                    <img loading="lazy" src={JournalImg5} alt="JournalImg" />
                  </div>
                  <div className="jgc-details">
                    <h6>The Art of SEO: Proven Search Engine Strategies</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
