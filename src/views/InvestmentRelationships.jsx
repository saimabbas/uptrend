import React, { useState, useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "../styles/views/investment-relations.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import LocalStartupImg from "../assets/img/local-startup-img.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img-2.png";
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
import MMSD2ndImg2 from "../assets/img/mm-sd-2nd-img-2.png";
import BonsaiImg from "../assets/img/bonsai.png";
import MoneyPlant from "../assets/img/money-plant.png";
import PlatformStatsImg3 from "../assets/img/leading-health-app.png";
import DDDTopArrow from "../assets/img/3d-top-arrow.png";
import SdWhiteWave from "../assets/img/sd-white-wave.png";
import RoundTree from "../assets/img/round-tree.png";
import ShowcaseImg from "../assets/img/showcase-gallery.svg";
import BBLogo6Dark from "../assets/img/backedby-logo-6-dark.svg";
import FundingDistribution from "../assets/img/funding-distribution.svg";
import Lottie from "react-lottie";
import animationData from "./../assets/json/investor-relations.json";
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
import chartAnimation5 from "./../assets/json/chart-animation-5.json";

const InvestmentRelationships = () => {
  const [isIconsBoxShowing, setIsIconsBoxShowing] = useState(false);
  const [isStopped5, setIsStopped5] = useState(true);

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
  const chartOptions5 = {
    loop: false,
    autoplay: false,
    animationData: chartAnimation5,
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
    /*   .fromTo(
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
    let fundingDistributionAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".funding-distribution-section",
        start: "top 50%",
      },
    });
    fundingDistributionAnim
      .fromTo(
        ".fdc-prog-bar",
        {
          width: "0",
        },
        {
          width: "100%",
        }
      )
      .fromTo(
        ".fdc-prog-inner-bar",
        {
          width: "0",
        },
        {
          width: "100%",
        },
        0
      )
      .fromTo(
        ".fdc-text-box",
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
        0
      );

    const playChartAnimation5 = () => {
      setIsStopped5(false);
    };
    let nftCardsAnim5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-1",
        start: "top 100%",
      },
      onComplete: playChartAnimation5,
    });
    nftCardsAnim5.fromTo(
      ".ugs-pss-1 .ps-box",
      {
        y: "5rem",
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0,
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
                <h1>Investor Relations</h1>
                <h3>
                  Building world-changing opportunities for industry innovators
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
          <div className="im-hero-img">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>SERVICE DESCRIPTION</h2>
              <a href="/talktous" className="arrow-link">
                <span>GET STARTED</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid" id="explore">
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
        <section className="funding-distribution-section">
          <div className="box">
            <div className="fd-content">
              <div className="fdc-top">
                <div className="fdc-top-left">
                  <span>HOW IT WORKS</span>
                  <h2>FUNDING DISTRIBUTION</h2>
                  <h6>Private Equity For Promising Brands</h6>
                </div>
                <div className="fdc-top-right">
                  <img src={FundingDistribution} alt="funding-distribution" />
                </div>
              </div>
              <div className="fdc-bottom">
                <div className="fdc-prog">
                  <div className="fdc-prog-bar"></div>
                  <div className="fdc-text-box">
                    <h4>
                      75% <span>Uptrend Partner Capital</span>
                    </h4>
                  </div>
                  <div className="fdc-prog-inner">
                    <div className="fdc-prog-inner-bar"></div>
                    <div className="fdc-text-box">
                      <h4>
                        25% <span>Project Equity</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BackedByLogosSwiper backedByLight={false} />
        <section className="platform-stats-section ugs-pss-1">
          <div className="box">
            <div className="platform-stats-grid">
              <div className="platform-stats-details">
                <h6>Proof of Work</h6>
                <h3>The Leading Health App In East Asia</h3>
                <h4></h4> {/* Don't remove this h4. This is for margin */}
                <h5>Venture Capital Creates Value for Startups</h5>
                <p>
                  We helped the #1 health startup in East Asia attract
                  $11,400,000 venture capital in less than 90 days.
                </p>
              </div>
              <div className="platform-stats-img">
                {/* <img
                  loading="lazy"
                  src={PlatformStatsImg3}
                  alt="PlatformStatsImg3"
                /> */}
                <Lottie
                  className="im-hero-img"
                  options={chartOptions5}
                  isStopped={isStopped5}
                />
              </div>
            </div>
            <div className="platform-stats-text-grid pstgm2">
              <div className="ps-box ps-box-1">
                <div className="ps-box-content">
                  <h3>
                    <span>11 400 000</span>
                  </h3>
                  <p>Private Equity</p>
                </div>
              </div>
              <div className="ps-box ps-box-2">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span>8</span>
                  </h3>
                  <p>Venture Funds</p>
                </div>
              </div>
              <div className="ps-box ps-box-3">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span>90</span>
                  </h3>
                  <p>Days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GreenWaveHeadingSection
          smallText="ready to start"
          bigText="a new trend?"
          linkText="let's get started!"
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
                      <p>Investor Relations Explained</p>
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
                      Investor Relations (IR) controls the flow of information
                      between a public company, its investors, and shareholders,
                      through an effective combination of communication,
                      finance, and marketing.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>How to prepare a startup for funding?</p>
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
                      No matter how popular your product or business idea has
                      proven to be, as the business scales, additional capital
                      and financial funding inevitably become a necessity. The
                      smartest startups rely on opportunities that include
                      accelerators, events, private meetings, online fundraising
                      platforms, social media networking, and much more!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>How can startups attract leading investors?</p>
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
                      Startup investors are always seeking the next big
                      opportunity or innovative company with a potential for
                      high profits. Does your startup have this potential? If
                      so, Uptrend can help you understand what your startup
                      needs to attract investors and secure funding for your
                      business. Reach out to us to learn more today!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>
                        What is included in Uptrend Investor Relations services?
                      </p>
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
                      The Uptrend IR team deploys advanced tactical strategies
                      designed to quickly secure investment opportunities for
                      startups and deliver exclusive access to private meetings
                      with leading VC firms.
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

export default InvestmentRelationships;
