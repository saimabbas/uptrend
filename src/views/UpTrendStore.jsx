import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "../styles/views/uptrend-store.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/uptrend-store-hero-img.svg";
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import PhotoImg from "../assets/img/photo-img.svg";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import UTJacket from "../assets/img/ut-jacket.png";
import UTRaincoat from "../assets/img/UTRaincoat.png";
import TShirt from "../assets/img/tshirt.png";
import UTBag from "../assets/img/utbag.png";
import UTCap from "../assets/img/utcap.png";
import UTBrac from "../assets/img/utbrac.png";
import NFTGal1 from "../assets/img/nft-gall-1.png";
import NFTGal2 from "../assets/img/nft-gall-2.png";
import NFTGal3 from "../assets/img/nft-gall-3.png";
import NFTGal4 from "../assets/img/nft-gall-4.png";
import NFTGal5 from "../assets/img/nft-gall-5.png";
import KnotImg from "../assets/img/knot-img.svg";
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

const UpTrendStore = () => {
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
                <h1>Event Marketing</h1>
                <h3>We guide brands through event planning of any magnitude</h3>
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
            className="ups-hero-img"
            src={EmHeroImg}
            alt="EmHeroImg"
          />
        </section>
        <section className="ut-store-merch-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Exclusive Merch</h2>
            </div>
            <div className="ut-store-grid">
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={UTJacket} alt="UTJacket" />
                </div>
                <h5>UPTREND HOODIE</h5>
                <div className="ut-price">
                  <p>$ 25</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={UTRaincoat} alt="Raincoat" />
                </div>
                <h5>UPTREND CLOAK</h5>
                <div className="ut-price">
                  <p>$ 30</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={TShirt} alt="TShirt" />
                </div>
                <h5>UPTREND T-SHIRT</h5>
                <div className="ut-price">
                  <p>$ 15</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={UTBag} alt="Bag" />
                </div>
                <h5>UPTREND BAG</h5>
                <div className="ut-price">
                  <p>$ 10</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={UTCap} alt="Cap" />
                </div>
                <h5>UPTREND CAP</h5>
                <div className="ut-price">
                  <p>$ 10</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
              <div className="ut-store-grid-content">
                <div className="ut-gc-box">
                  <img loading="lazy" src={UTBrac} alt="Bracelet" />
                </div>
                <h5>UPTREND BRACELET</h5>
                <div className="ut-price">
                  <p>$ 15</p>
                  <a href="#" className="arrow-link">
                    <span>ORDER</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nft-gallery-section">
          <div className="box">
            <div className="section-heading-box">
              <h3 className="head-subhead">Nft Gallery</h3>
            </div>
            <div className="nft-gallery-grid">
              <div className="nft-gallery-content">
                <img src={NFTGal1} alt="NFT" />
                <div className="nft-para">
                  <h5>SKULLTOON 3211</h5>
                  <p>0.07 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal2} alt="NFT" />
                <div className="nft-para">
                  <h5>SKULLTOON 3211</h5>
                  <p>0.07 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal3} alt="NFT" />
                <div className="nft-para">
                  <h5>SKULLTOON 3211</h5>
                  <p>0.07 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal4} alt="NFT" />
                <div className="nft-para">
                  <h5>SKULLTOON 3211</h5>
                  <p>0.07 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal5} alt="NFT" />
                <div className="nft-para">
                  <h5>SKULLTOON 3211</h5>
                  <p>0.07 ETH</p>
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

export default UpTrendStore;
