import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "../styles/views/media.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/em-hero-img.svg";
import BeInCrypto from "../assets/img/be-in-crypto.svg";
import Coinspeaker from "../assets/img/Coinspeaker.svg";
import Koinpost from "../assets/img/Koinpost.svg";
import Zycrypto from "../assets/img/zycrypto.png";
import techtime from "../assets/img/techtime.svg";
import coingape from "../assets/img/coingape.svg";
import UM from "../assets/img/um.svg";
import MediaArticle from "../assets/img/media-article.png";
import Article1 from "../assets/img/article1.svg";
import Article4 from "../assets/img/article4.svg";
import Article3 from "../assets/img/article3.svg";
import Article5 from "../assets/img/article5.svg";
import Article6 from "../assets/img/article6.svg";
import Telegram from "../assets/icons/Telegram";
import Email from "../assets/icons/Email";
import Whatsapp from "../assets/icons/Whatsapp";
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
import animationData from "./../assets/json/media.json";

const Media = () => {
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
        "<0.5"
      )
      .fromTo(
        ".hero-c-icons-box a",
        {
          opacity: 0,
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.075,
          duration: 0.5,
        }
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
        trigger: ".service-description-section",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".media-grid-card",
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
      <div className="media-page">
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
                <h1>Leading Media Outlets Boosting Brand Profile</h1>
                <h3>Contact us to start promotion today!</h3>
                <div className="hero-c-icons-box">
                  <a href="#">
                    <Whatsapp />
                  </a>
                  <a href="https://twitter.com/UptrendAgency">
                    <IconTwitter color="#000" />
                  </a>
                  <a href="#">
                    <Telegram />
                  </a>
                  <a href="#">
                    <Email />
                  </a>
                </div>
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
        <section className="service-description-section" id="explore">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>FINANCE MEDIA</h2>
              <a href="#" className="arrow-link">
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="media-grid">
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={BeInCrypto} alt="BeInCrypto" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>3.600.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$1950</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img
                    src={BeInCrypto}
                    alt="BeInCrypto"
                    className="mg-img-mob"
                  />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={Article1} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>3.600.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$1950</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={coingape} alt="=Coingape" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>1.300.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$1 500</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img src={coingape} alt="=Coingape" className="mg-img-mob" />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={MediaArticle} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>1.300.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$1 500</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={Koinpost} alt="Koinpost" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>109.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$750</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img src={Koinpost} alt="Koinpost" className="mg-img-mob" />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={Article3} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>109.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$750</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={Zycrypto} alt="Zycrypto" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>976.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$1 500</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img src={Zycrypto} alt="Zycrypto" className="mg-img-mob" />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={Article4} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>976.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$1 500</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={Coinspeaker} alt="Coinspeaker" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>130.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$1 200</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img
                    src={Coinspeaker}
                    alt="Coinspeaker"
                    className="mg-img-mob"
                  />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={Article5} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>130.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$1 200</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-grid-card">
                <div className="media-grid-card-left">
                  <img src={techtime} alt="Techtimes" />
                  <div className="mgc-text-box-con">
                    <div className="mgc-text-box">
                      <span>traffic</span>
                      <h3>1.300.000</h3>
                    </div>
                    <div className="mgc-text-box">
                      <span>price</span>
                      <h3>$1 550</h3>
                    </div>
                  </div>
                </div>
                <div className="media-grid-card-right">
                  <img src={techtime} alt="Techtimes" className="mg-img-mob" />
                  <div className="mgcr-top">
                    <p>Future Article</p>
                    <img src={UM} alt="UM" />
                  </div>
                  <img src={Article6} alt="MediaArticle" />
                  <div className="traf-pric-mob">
                    <div className="mgc-text-box-mob">
                      <span>traffic</span>
                      <h3>1.300.000</h3>
                    </div>
                    <div className="mgc-text-box-mob">
                      <span>price</span>
                      <h3>$1 550</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Media;
