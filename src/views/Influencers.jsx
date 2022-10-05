import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "../styles/influencers.css";
import "../styles/views/media.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import EmHeroImg from "../assets/img/influencers-hero-img.svg";
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import PhotoImg from "../assets/img/photo-img.png";
import EMSD2ndImg from "../assets/img/em-sd-2nd-img.png";
import EMSD3rdImg from "../assets/img/em-sd-3rd-img.png";
import KnotImg from "../assets/img/knot-img.png";
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
import MediaArticle from "../assets/img/media-article.png";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import YTIcon from "../assets/img/youtube-icon.svg";
import IGCImg1 from "../assets/img/igc-img-1.png";
import DEImg from "../assets/img/de.svg";
import IGCImg2 from "../assets/img/igc-img-2.png";
import IGCImg3 from "../assets/img/igc-img-3.png";
import IGCImg4 from "../assets/img/igc-img-4.png";
import IGCImg5 from "../assets/img/igc-img-5.png";
import IGCImg6 from "../assets/img/igc-img-6.png";
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
import Telegram from "../assets/icons/Telegram";
import Email from "../assets/icons/Email";
import Whatsapp from "../assets/icons/Whatsapp";
import Lottie from "react-lottie";
import animationData from "./../assets/json/media.json";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

const Influencers = () => {
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
        ".hero-c-icons-box a",
        {
          opacity: 0,
          x: 50,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
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
        trigger: ".service-description-section",
        start: "top 50%",
      },
    });
    nftCardsAnim.fromTo(
      ".influencers-grid-card",
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
      <div className="loading-screen">
        <UTLogo color="#fff" />
      </div>
      <div className="influencers-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content influencer-marketing-content-2">
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
                <h1>Trustworthy Influencers Supporting Brand Growth</h1>
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
              <h2>LOCAL YOUTUBE CRYPTO INFLUENCERS</h2>
              <a href="/influencermarketing" className="arrow-link">
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="influencers-grid">
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg1} alt="IGCImg1" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        CoinCheckTV <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>47,000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$43,000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$5,500</h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg2} alt="IGCImg2" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        Täglich Bitcoin & Crypto{" "}
                        <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>60 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$31 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$2 700 </h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg3} alt="IGCImg3" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        TestWerk <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>23 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$9 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$1 200</h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg4} alt="IGCImg4" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        CryptoTuts <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>35 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$17 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$2 300</h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg5} alt="IGCImg5" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        Hoss <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>91 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$86 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$6 000</h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="influencers-grid-card">
                <div className="igc-top">
                  <div className="igc-top-img-box">
                    <img className="igc-profile" src={IGCImg6} alt="IGCImg6" />
                    <img
                      className="igc-platform-icon"
                      src={YTIcon}
                      alt="YTIcon"
                    />
                  </div>
                  <div className="igc-top-text-box">
                    <div>
                      <h4>
                        Crypto Deutschland <img src={DEImg} alt="DEImg " />
                      </h4>
                    </div>
                    <p>Organic integration</p>
                  </div>
                </div>
                <div className="igc-bottom">
                  <div className="igc-bottom-left">
                    <div className="igc-bl-text-box">
                      <span>followers</span>
                      <h3>33 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>deposits</span>
                      <h3>$74 000</h3>
                    </div>
                    <div className="igc-bl-text-box">
                      <span>price</span>
                      <h3>$5 500</h3>
                    </div>
                  </div>
                  <div className="igc-bottom-right">
                    <iframe
                      src="https://www.youtube.com/embed/UYpRE2d0EGo"
                      title="Redragon Zeus H510 Review - The Best 50$ gaming headset"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
