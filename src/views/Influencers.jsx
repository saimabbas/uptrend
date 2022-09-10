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
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import PhotoImg from "../assets/img/photo-img.svg";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import KnotImg from "../assets/img/knot-img.svg";
import TrImg from "../assets/img/tr.svg";
import ECImg from "../assets/img/ec.svg";
import BBLogo1Dark from "../assets/img/backedby-logo-1-dark.svg";
import BBLogo2Dark from "../assets/img/backedby-logo-2-dark.svg";
import BBLogo3Dark from "../assets/img/backedby-logo-3-dark.svg";
import BBLogo4Dark from "../assets/img/backedby-logo-4-dark.svg";
import BBLogo5Dark from "../assets/img/backedby-logo-5-dark.svg";
import BBLogo6Dark from "../assets/img/backedby-logo-6-dark.svg";
import BeInCrypto from "../assets/img/be-in-crypto.svg";
import UM from "../assets/img/um.svg";
import MediaArticle from "../assets/img/media-article.svg";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";

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

const Influencers = () => {
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
      {/* <div className="loading-screen">
        <UTLogo color="#fff" />
      </div> */}
      <div className="media-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Trustworthy Influencers Supporting Brand Growth</h1>
                <h3>Contact us to start promotion today!</h3>
                <div className="hero-c-icons-box">
                  <a href="#">
                    <IconLinkedIn color="#000" />
                  </a>
                  <a href="#">
                    <IconFacebook color="#000" />
                  </a>
                  <a href="#">
                    <IconInstagram color="#000" />
                  </a>
                  <a href="#">
                    <IconTwitter color="#000" />
                  </a>
                </div>
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
        <section className="service-description-section">
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
                  <img src={MediaArticle} alt="MediaArticle" />
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
                  <img src={MediaArticle} alt="MediaArticle" />
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
                  <img src={MediaArticle} alt="MediaArticle" />
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
                  <img src={MediaArticle} alt="MediaArticle" />
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
                  <img src={MediaArticle} alt="MediaArticle" />
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
                  <img src={MediaArticle} alt="MediaArticle" />
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

export default Influencers;
