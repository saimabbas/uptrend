import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import MmHeroImg from "../assets/img/mm-hero-img.svg";
import WinnertrophyImg from "../assets/img/winner-trophy.png";
import SpeakerImg from "../assets/img/speaker-img-orange.png";
import PlatformLogo1 from "../assets/icons/twitch-logo-2.svg";
import PlatformLogo2 from "../assets/icons/twitter-logo-2.svg";
import PlatformLogo3 from "../assets/icons/youtube-logo-2.svg";
import PlatformLogo4 from "../assets/icons/snapchat-logo-2.svg";
import PlatformLogo5 from "../assets/icons/weibo-logo-2.svg";
import PlatformLogo6 from "../assets/icons/linkedin-logo-2.svg";
import PlatformLogo7 from "../assets/icons/tiktok-logo-2.svg";
import PlatformLogo8 from "../assets/icons/instagram-logo-2.svg";
import PlatformLogo9 from "../assets/icons/facebook-logo-2.svg";
import PlatformLogo10 from "../assets/icons/wechat-logo-2.svg";
import PlatformLogo11 from "../assets/icons/kakaotalk-logo-2.svg";
import UTPartners from "../assets/img/ut-partners-img-red.png";
import IndustriesPlanetImg from "../assets/img/industries-planet.png";
import CrossPolinationImg from "../assets/img/cross-polination.png";
import CPBeeImg from "../assets/img/cp-bee-img.png";
import PlatformStatsImg from "../assets/img/platform-stats-img.svg";
import BigThingsWave from "../assets/img/big-things-wave.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img-2.png";
import BoyMetaverse from "../assets/img/boy-experiencing-metaverse.png";
import companyLogo14 from "../assets/img/logo-meta.png";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import LogoDecentralized from "../assets/img/logo-decentralized.svg";
import MMSD4thImg from "../assets/img/mm-sd-4th-img.png";
import MMSD4thImg2 from "../assets/img/mm-sd-4th-img-2.svg";
import MMSD2ndImg2 from "../assets/img/mm-sd-2nd-img-2.png";
import BonsaiImg from "../assets/img/bonsai.png";
import FashionBrandImg from "../assets/img/fashion-brand-img.svg";
import CrownImg from "../assets/img/crown.svg";
import ConnectionImg from "../assets/img/connection.svg";
import ShowcaseImg from "../assets/img/showcase-gallery.svg";
import TRArrowImg from "../assets/img/top-right-arrow.svg";

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
import animationData from "./../assets/json/metaverse-marketing.json";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

const MetaverseMarketing = () => {
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

    let homeExpertiseAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid",
        start: "top 50%",
      },
    });
    homeExpertiseAnim
      .fromTo(
        ".msgc1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        ".msgc2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
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
          duration: 0.5,
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
          duration: 0.5,
        },
        "<0.1"
      );

    /*  .fromTo(
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

    let homeExpertiseAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-description-grid-2",
        start: "top 50%",
      },
    });
    homeExpertiseAnim2
      .fromTo(
        ".msgc1-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        ".msgc2-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.1"
      )
      .fromTo(
        ".msgc3-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.1"
      )
      .fromTo(
        ".msgc4-2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.1"
      );

    /* .fromTo(
        ".msgc2-2 img",
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
        ".msgc3-2 img",
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
        ".msgc4-2 img",
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
        ".msgc3-2 h5",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0"
      ); */
    let nftCardsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-1",
        start: "top 25%",
      },
    });
    nftCardsAnim1
      .fromTo(
        ".ugs-pss-1 .fashion-brand-img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
        }
      )
      .fromTo(
        ".ugs-pss-1 .ps-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: {
            each: 0.25,
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
      <div className="metaverse-marketing-page">
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
                <h1>Metaverse Marketing</h1>
                <h3>The bridge to brand success</h3>
              </div>
              <div className="im-hero-explore">
                <a href="#explore">
                  <span>explore</span>
                  <MdArrowDownward />
                </a>
              </div>
            </div>
          </div>
          {/*  <img
            loading="lazy"
            className="im-hero-img"
            src={MmHeroImg}
            alt="MmHeroImg"
          /> */}
          <div className="im-hero-img im-hero-img-rotated">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section id="explore" className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>SERVICE DESCRIPTION</h2>
              <Link to="/talktous">
                {" "}
                <a href="#" className="arrow-link">
                  <span>GET STARTED</span>
                  <MdArrowForward />
                </a>
              </Link>
            </div>
            <div className="service-description-grid">
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
                    {" "}
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
        <section className="service-description-section service-description-section-2">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Engage With Uptrend In The Metaverse</h2>
              <Link to="/sandbox">
                <a href="#" className="arrow-link">
                  <span>Get Started</span>
                  <MdArrowForward />
                </a>
              </Link>
            </div>
            <div className="service-description-grid service-description-grid-2">
              <div className="sd-grid-card mm-sd-grid-card-2-1 msgc1-2">
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={CrownImg} alt="CrownImg" />
                  <h5>Introduce exclusive NFTs</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={ConnectionImg} alt="ConnectionImg" />
                  <h5>Provide networking events</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={ShowcaseImg} alt="ShowcaseImg" />
                  <h5>Showcase new products</h5>
                </div>
                <div className="mm-info-small-grid-box">
                  <img loading="lazy" src={TRArrowImg} alt="TRArrowImg" />
                  <h5>Tap into venture capital</h5>
                </div>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4 msgc2-2">
                <div className="msgc2-2-bg"></div>
                <img loading="lazy" src={MMSD2ndImg2} alt="MMSD4thImg" />
              </div>
              <div className="sd-grid-card mm-sd-grid-card-3-2 msgc3-2">
                <div className="msgc3-2-bg"></div>
                <img loading="lazy" src={BonsaiImg} alt="BonsaiImg" />
                <h5>
                  <b> Achieve the holistic growth</b> by integrating your
                  business in Metaverse
                </h5>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4 msgc4-2">
                <div className="msgc4-2-bg"></div>
                <img loading="lazy" src={MMSD4thImg2} alt="MMSD4thImg" />
              </div>
            </div>
          </div>
        </section>
        <section className="im-trusted-by">
          <div className="box">
            <TrustedByCompanies trustedByLight={false} />
          </div>
        </section>
        <section className="platform-stats-section ugs-pss-1">
          <img
            className="fashion-brand-img"
            src={FashionBrandImg}
            alt="FashionBrandImg"
          />

          <div className="box">
            <div className="platform-stats-grid fashion-brand-grid">
              <div className="platform-stats-details">
                <h6>Proof of Work</h6>
                <h3>FORTUNE-500 FASHION BRAND </h3>
                <h4></h4> {/* Don't remove this h4. This is for margin */}
                <h5>Iconic Brands Are Betting Big On The Metaverse </h5>
                <p>
                  We've tapped into the incredible potential of the Metaverse.
                  The brand fashion event organized by Uptrend attracted an
                  audience of 19,400 visitors.
                </p>
              </div>
              <div className="platform-stats-img fashion-brand-img-box">
                <img src={FashionBrandImg} alt="FashionBrandImg" />
              </div>
            </div>
            <div className="platform-stats-text-grid">
              <div className="ps-box ps-box-1">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span>217</span>%
                  </h3>
                  <p>Brand Mentions</p>
                </div>
              </div>
              <div className="ps-box ps-box-2">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span> 19400</span>
                  </h3>
                  <p>Metaverse Event Attendees</p>
                </div>
              </div>
              <div className="ps-box ps-box-3">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span>83</span> %
                  </h3>
                  <p>Organic Traffic</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GreenWaveHeadingSection
          smallText="ready to start"
          bigText="a new trend?"
          linkText="Let's Get Started!"
          linkOfText="/talktous"
        />
        <section className="faq-section">
          <div className="box">
            <h3>
              Frequently Asked Questions <br /> (FAQs)
            </h3>
            <div className="faq-box">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>What Is The Metaverse?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Metaverse is a term used to describe a distinct
                      combination of virtual and mixed reality worlds, accessed
                      through a web browswer or VR headset, which allows users
                      to have real-time interactions and experiences across
                      great distances.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>How to Interact with Metaverse?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The Metaverse is an immersive, 360-degree digital world
                      where users can create avatars, own virtual assets, and
                      more, using blockchain-based web 3.0 technology. The
                      emerging technology has companies like Facebook,
                      Microsoft, Sony, and more scrambling for the first-mover
                      advantage.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>Top Brands Jumping Into Metaverse Trend?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Although the Metaverse is a new concept, multiple top
                      consumer brands have begun to sell digital items that
                      integrate into the growing virtual worlds. Iconic brands
                      like Nike, Zara, Philipp Plein, Adidas have already
                      embraced the Metaverse with more brands planning to
                      follow.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>What Does Metaverse Marketing Include?</p>
                      <div className="fb-plus-box fb-icon-box">
                        <MdAdd />
                      </div>
                      <div className="fb-minus-box fb-icon-box">
                        <MdRemove />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Uptrend designers construct exclusive interactive
                      experiences to build brand presence in the Metaverse.
                      <br />
                      <br />
                      Interactive Metaverse advertising include:
                      <br />
                      <br />
                      Virtual showrooms
                      <br />
                      Exclusive merch
                      <br />
                      Web 3 events
                      <br />
                      Interactive Metaverse assets
                      <br />
                      3D & AR models
                      <br />
                      And much more!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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

export default MetaverseMarketing;
