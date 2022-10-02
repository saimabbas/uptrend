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
import ImHeroImg from "../assets/img/im-hero-img.png";
import ImHeroVideo from "../assets/videos/im-hero-video.mp4";
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
import BullElevatorImg2 from "../assets/img/bull-elevator-img-2.png";

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
import Lottie from "react-lottie";
import animationData from "./../assets/json/influencer-marketing.json";

const InfluencerMarketing = () => {
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
          duration: 0.5,
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
          duration: 0.5,
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
    gsap.fromTo(
      ".cp-details img",
      {
        y: 10,
        rotate: 5,
      },
      {
        rotate: -5,
        y: -10,
        ease: Linear.easeInOut,
        duration: 2,
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
        ".sd-grid-card-1-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.35,
        }
      )
      .fromTo(
        ".sd-grid-card-2-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.35,
        },
        "<0.075"
      )
      .fromTo(
        ".sd-grid-card-4-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.35,
        },
        "<0.075"
      )
      .fromTo(
        ".sd-grid-card-3-bg",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.35,
        },
        "<0.075"
      )
      .fromTo(
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
      );
    let nftCardsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ugs-pss-1",
        start: "top 25%",
      },
    });
    nftCardsAnim1
      .fromTo(
        ".ugs-pss-1 .platform-stats-img img",
        {
          opacity: 0,
          x: "20rem",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
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
          duration: 0.65,
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
      <div className="influencer-marketing-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Influencer Marketing</h1>
                <h3>Outstanding opportunity to dominate the market</h3>
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
            src={ImHeroVideo}
            alt="ImHeroImg"
          /> */}
          <div className="im-hero-img">
            <Lottie className="im-hero-img" options={defaultOptions} />
          </div>
        </section>
        <section className="service-description-section" id="explore">
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
              <div className="sd-grid-card sd-grid-card-1">
                <div className="sd-grid-card-1-bg"></div>
                <div className="sdgc1-details">
                  <h3>
                    <span> #1 INTERNALTIONAL</span>
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
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo1}
                      alt="PlatformLogo1"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo2}
                      alt="PlatformLogo2"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo3}
                      alt="PlatformLogo3"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo4}
                      alt="PlatformLogo4"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo5}
                      alt="PlatformLogo5"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo6}
                      alt="PlatformLogo6"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo7}
                      alt="PlatformLogo7"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo8}
                      alt="PlatformLogo8"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo9}
                      alt="PlatformLogo9"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo10}
                      alt="PlatformLogo10"
                    />
                  </div>
                  <div className="apg-box">
                    <img
                      loading="lazy"
                      src={PlatformLogo11}
                      alt="PlatformLogo11"
                    />
                  </div>
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
        <section className="cross-polination-section">
          <div className="box">
            <div className="cp-grid">
              <div className="cp-details">
                <h6>Content Distribution</h6>
                <img loading="lazy" src={CPBeeImg} alt="CPBeeImg" />
                <h2>Cross-Polination</h2>
                <h4>Premier Content Distribution</h4>
              </div>
              <div className="cp-img-box">
                <img
                  loading="lazy"
                  src={CrossPolinationImg}
                  alt="CrossPolinationImg"
                />
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
          <div className="box box-p">
            <div className="platform-stats-grid">
              <div className="platform-stats-details">
                <h6>Proof of Work</h6>
                <h3>#1 ONLINE EDUCATIONAL</h3>
                <h4>PLATFORM IN EUROPE</h4>x{" "}
                <h5>Growth Unlocked - Performance Guaranteed</h5>
                <p>
                  By seamlessly integrating with Uptrend, our partner achieved
                  unprecedented growth with influencer marketing service
                </p>
              </div>
              <div className="platform-stats-img">
                <img
                  loading="lazy"
                  src={PlatformStatsImg}
                  alt="PlatformStatsImg"
                />
              </div>
            </div>
            <div className="platform-stats-text-grid">
              <div className="ps-box ps-box-1">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span>%
                  </h3>
                  <p>Growth In New User Sign-Ups</p>
                </div>
              </div>
              <div className="ps-box ps-box-2">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span> %
                  </h3>
                  <p>LTV Increase</p>
                </div>
              </div>
              <div className="ps-box ps-box-3">
                <div className="ps-box-content">
                  <h3>
                    <MdArrowUpward /> <span></span>
                  </h3>
                  <p>Campaign Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GreenWaveHeadingSection
          smallText="ready for"
          bigText="big things?"
          linkText="let's talk!"
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
                      <p>
                        What is included in Uptrend Influencer Marketing
                        Services?
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
                      Uptrend influencer marketing services include Discovery
                      Phase, Recruitment of Talent, Influencer Relationship
                      Management, Content Review, Campaign Management &
                      Reporting, Influencer Analysis, Audience Analysis,
                      E-commerce Tools, Forms & Compliance, Fake Follower &
                      Fraud Detection, Payment Processing, and more.
                      <br />
                      <br />
                      Supported social media platforms include Twitch, Twitter,
                      YouTube, Tiktok, Instagram, Facebook, Linkedin, Snapchat,
                      Weibo, Wechat, Kakaotalk, and others.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>
                        What makes Uptrend stand out from other top agencies?
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
                      Uptrend is the #1 international content studio supported
                      by 120,000+ influencers across 220 countries. Uptrend
                      partners include celebrities, artists, athletes,
                      producers, streamers, and more. Combined with Uptrend's
                      unique expertise, our clients dominate in popular
                      categories like technology, crypto, gaming, e-commerce,
                      fashion, and the metaverse.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>
                        What results can be expected from Uptrend's Influencer
                        Marketing Services?
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
                      At Uptrend, we leverage influencer marketing as a key
                      channel, delivering consistent growth. Long-term
                      partnerships are strategically established with leading
                      influencers who actively promote Uptrend brands to a
                      highly engaged audience. We have spent years carefully
                      curating a range of respected talent and experimenting
                      with successful social media collaborations.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="faq-box-head">
                      <p>
                        Why is it important to work with leading influencers?
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
                      Influencers are known for creating content that resonates
                      with their audience, establishing them as powerful social
                      media entities. Brands can leverage this quality to convey
                      their messages to their target audience.
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

export default InfluencerMarketing;
