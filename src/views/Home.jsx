import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import HeroBull from "../assets/img/hero-bull.svg";
import HeroBlueOverlay from "../assets/img/hero-blue-overlay.svg";
import companyLogo2 from "../assets/img/logo-swissborg.svg";
import companyLogo8 from "../assets/img/logo-compound.svg";
import companyLogo14 from "../assets/img/logo-meta.svg";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import companyLogo16 from "../assets/img/logo-kephi.svg";
import companyLogo17 from "../assets/img/logo-bitcoinist.svg";
import companyLogo18 from "../assets/img/logo-tct.svg";
import OurMissionImg from "../assets/img/our-mission-img.svg";
import MissionIcon1 from "../assets/img/mission-icon-1.svg";
import MissionIcon2 from "../assets/img/mission-icon-2.svg";
import MissionIcon3 from "../assets/img/mission-icon-3.svg";
import OnlineMeeting from "../assets/img/online-meeting.svg";
import MaleInfluencer from "../assets/img/male-social-media-influencer.svg";
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
import JournalImg1 from "../assets/img/journal-img-1.svg";
import JournalImg2 from "../assets/img/journal-img-2.svg";
import JournalImg3 from "../assets/img/journal-img-3.svg";
import JournalImg4 from "../assets/img/journal-img-4.svg";
import JournalImg5 from "../assets/img/journal-img-5.svg";
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
import NFTGal6 from "../assets/img/nftgal6.svg";

// Icons
import { MdArrowForward, MdArrowDropDown } from "react-icons/md";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import { Autoplay, FreeMode } from "swiper";
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

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  useEffect(() => {
    const heroHeadAimInit = () => {
      HH1BoxANim.play();
    };
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

    var HH1BoxANim = gsap.timeline({
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
      });
    let homeLandingAnim = gsap.timeline({
      onComplete: heroHeadAimInit,
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
          duration: 0.5,
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
          duration: 2,
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
          y: 150,
          x: 150,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 3,
          ease: Power4.easeInOut,
        },
        "<0"
      )

      .fromTo(
        ".hero-company-logo-box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: Power4.easeInOut,
        },
        "<0.75"
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
          duration: 1,
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
          duration: 2,
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
          duration: 2.5,
          ease: Linear.easeInOut,
        },
        "<0.85"
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
        ease: Linear.easeInOut,
        stagger: {
          ease: Linear.easeInOut,
          each: 0.15,
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
  }, []);

  return (
    <main className="app">
      <div className="loading-screen">
        <UTLogo color="#fff" />
      </div>
      <div className="home-page">
        <section className="hero-section">
          <img className="hero-bull" src={HeroBull} alt="HeroBull" />
          <img
            className="hero-blue-overlay"
            src={HeroBlueOverlay}
            alt="HeroBlueOverlay"
          />
          <div className="box">
            <div className="hero-content">
              <Header lightHeader={true} />

              <h1>
                LEADING MARKETING PARTNER <br /> BUILDING
                <span>
                  <div className="head-box-green">
                    <div className="head-box-green-inner"></div>
                  </div>
                  <i>BRAND IMPACT</i>
                </span>
              </h1>
              <div className="hero-icons-line-box">
                <div></div>
                <a href="#">
                  <IconWhatsapp color="#fff" />
                </a>
                <a href="#">
                  <IconTwitter color="#fff" />
                </a>
                <a href="#">
                  <IconLinkedIn color="#fff" />
                </a>
                <a href="#">
                  <IconInstagram color="#fff" />
                </a>
                <a href="#">
                  <IconFacebook color="#fff" />
                </a>
              </div>
              <TrustedByCompanies trustedByLight={true} />
            </div>
          </div>
        </section>
        <section className="our-mission-section">
          <div className="box">
            <div className="our-mission-content">
              <div className="our-mission-left">
                <img loading="lazy" src={OurMissionImg} alt="OurMissionImg" />
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
                    Leverage <b>date science</b> to deliver results{" "}
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
                    <div className="ddd-cube">
                      <div className="ddd-f">
                        <h2>
                          Influencer <br />
                        </h2>
                      </div>
                      <div className="ddd-b">
                        <h2>
                          Influencer <br />
                        </h2>
                      </div>
                    </div>
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
                  <div className="ddd-cube">
                    <div className="ddd-f">
                      <h2>
                        metaverse <br />
                      </h2>
                    </div>
                    <div className="ddd-b">
                      <h2>
                        metaverse <br />
                      </h2>
                    </div>
                  </div>
                  <span>promotion</span>
                </div>
                <h5>
                  Establish brand presence in the Metaverse{" "}
                  <b>with interactive experiences</b>
                </h5>
                <div className="egc2-img-grid">
                  <img loading="lazy" src={companyLogo14} alt="companyLogo14" />
                  <img loading="lazy" src={companyLogo15} alt="companyLogo11" />
                </div>
              </div>
              <div className="expertise-grid-card expertise-grid-card-2 ddd-cube-p">
                <div>
                  <div className="ddd-cube">
                    <div className="ddd-f">
                      <h2>
                        Investor <br />
                      </h2>
                    </div>
                    <div className="ddd-b">
                      <h2>
                        Investor <br />
                      </h2>
                    </div>
                  </div>
                  <span>Relations</span>
                </div>
                <h5>
                  Uptrend Venture partners assist brands with{" "}
                  <b>scaling and growth</b>
                </h5>
                <div className="egc2-img-grid">
                  <img loading="lazy" src={companyLogo2} alt="companyLogo14" />
                  <img loading="lazy" src={companyLogo8} alt="companyLogo11" />
                </div>
              </div>
              <div className="expertise-grid-card expertise-grid-card-1 ddd-cube-p">
                <div className="egc1-top">
                  <div>
                    <div className="ddd-cube">
                      <div className="ddd-f">
                        <h2>
                          EVENT <br />
                        </h2>
                      </div>
                      <div className="ddd-b">
                        <h2>
                          EVENT <br />
                        </h2>
                      </div>
                    </div>
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
                <img
                  loading="lazy"
                  src={IconTwitterFilled}
                  alt="IconTwitterFilled"
                />
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
                      <h4>Nico Verderosa </h4>
                      <h6>@nico1991</h6>
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
                    <img
                      loading="lazy"
                      src={companyLogo16}
                      alt="companyLogo16"
                    />
                    <div className="hrgc-head-name">
                      <h6>Kephi Gallery</h6>
                      <p>Chief Operation Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img loading="lazy" src={Tony} alt="Tony" />
                    <div className="hrgc-head-name">
                      <h4>Tony Spilotro </h4>
                      <h6>@black.m</h6>
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
                    <img
                      loading="lazy"
                      src={companyLogo17}
                      alt="companyLogo17"
                    />
                    <div className="hrgc-head-name">
                      <h6>Bitcoinist</h6>
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
                      <h4>Danny Les </h4>
                      <h6>@black.m</h6>
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
                    <img
                      loading="lazy"
                      src={companyLogo18}
                      alt="companyLogo18"
                    />
                    <div className="hrgc-head-name">
                      <h6>Content Tap</h6>
                      <p>Founder of The Content Tap</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Company Email"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Telegram or Whatsapp"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Website"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="How can we lend a helping hand?"
                  />
                </div>
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
                speed={10000}
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
              <img
                loading="lazy"
                src={LimitedEditionImg}
                alt="LimitedEditionImg"
              />
            </div>
            <button className="ut-btn-green">SHOW IT!</button>
          </div>
          <div className="ut-store-wave-box">
            <img loading="lazy" src={UtStoreWave} alt="UtStoreWave" />
            <h2>
              <span>OFFICE IN</span> <br />
              SANDBOX
            </h2>
            <div className="box ut-store-right-arrow">
              <a href="#">
                <MdArrowForward />
              </a>
            </div>
          </div>
        </section>
        <section className="ut-journal-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Uptrend Journal</h2>
              <a href="#" className="arrow-link">
                <span>READ MORE </span>
                <MdArrowForward />
              </a>
            </div>
            <div className="journal-grid">
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
              <div className="journal-grid-card">
                <div className="jgc-img-box">
                  <img loading="lazy" src={JournalImg3} alt="JournalImg" />
                </div>
                <div className="jgc-details">
                  <h6>
                    Top 5 Influencer Marketing Software Solutions To Boost Brand
                    Growth In 2022 (Part 1)
                  </h6>
                  <p>
                    Check out this comprehensive guide to discovering the most
                    powerful influencers using popular influencer marketing
                    software based on Uptrend’s insights and experience.
                  </p>
                </div>
              </div>
              <div className="journal-grid-card">
                <div className="jgc-img-box">
                  <img loading="lazy" src={JournalImg4} alt="JournalImg" />
                </div>
                <div className="jgc-details">
                  <h6>New Local Region? Tips To Get Started</h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <div className="jgc-img-box">
                  <img loading="lazy" src={JournalImg5} alt="JournalImg" />
                </div>
                <div className="jgc-details">
                  <h6>The Art of SEO: Proven Search Engine Strategies</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
