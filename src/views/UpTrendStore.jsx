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
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";
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
import NFTGal6 from "../assets/img/nftgal6.png";
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
import animationData from "./../assets/json/uptrend-store.json";

const UpTrendStore = () => {
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
    let merchCardsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".ut-store-merch-section",
        start: "top 50%",
      },
    });
    merchCardsAnim.fromTo(
      ".ut-store-grid-content",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: {
          each: 0.15,
        },
      }
    );
    /* let nftCardsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".nft-gallery-section",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".nft-gallery-content",
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
    ); */
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
                <h1>Uptrend Store</h1>
                <h3>Limited Edition</h3>
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
            className="ups-hero-img"
            src={EmHeroImg}
            alt="EmHeroImg"
          /> */}
          <div className="im-hero-img im-hero-img-r">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="ut-store-merch-section" id="explore">
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
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987523691427659777">
                    UPTREND COIN
                  </a>
                  <p>0.01 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal2} alt="NFT" />
                <div className="nft-para">
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987525890450915329/">
                    UPTREND PLANET
                  </a>
                  <p>0.125 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal3} alt="NFT" />
                <div className="nft-para">
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987528089474170881/">
                    UPTREND PORTAL
                  </a>
                  <p>0.12 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal4} alt="NFT" />
                <div className="nft-para">
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987526989962543105/">
                    UPTREND ISLAND
                  </a>
                  <p>0.12 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal5} alt="NFT" />
                <div className="nft-para">
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987529188985798657/">
                    UPTREND BULL
                  </a>
                  <p>0.2 ETH</p>
                </div>
              </div>
              <div className="nft-gallery-content">
                <img src={NFTGal6} alt="NFT" />
                <div className="nft-para">
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18160536772341705411817621612469804320917370074890825657283987524790939287553/">
                    UPTREND HORNS
                  </a>
                  <p>0.25 ETH</p>
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

export default UpTrendStore;
