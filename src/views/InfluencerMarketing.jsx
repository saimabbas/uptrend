import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import ImHeroImg from "../assets/img/im-hero-img.png";
import WinnertrophyImg from "../assets/img/winner-trophy.svg";
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
import CrossPolinationImg from "../assets/img/cross-polination.svg";
import CPBeeImg from "../assets/img/cp-bee-img.svg";
import PlatformStatsImg from "../assets/img/platform-stats-img.svg";
import BigThingsWave from "../assets/img/big-things-wave.svg";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";

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

const InfluencerMarketing = () => {
  return (
    <main className="app">
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
            src={ImHeroImg}
            alt="ImHeroImg"
          />
        </section>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>SERVICE DESCRIPTION</h2>
              <a href="#" className="arrow-link">
                <span>READ MORE </span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid">
              <div className="sd-grid-card sd-grid-card-1">
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
                    <span>Influencers</span>
                    <span>Celebrities</span>
                    <span>Athletes</span>
                    <span>Artists</span>
                    <span>Streamers</span>
                    <span>Producers</span>
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
        <section className="platform-stats-section">
          <div className="box">
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
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 690%
                </h3>
                <p>Growth In New User Sign-Ups</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 64%
                </h3>
                <p>LTV Increase</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 14 320 344
                </h3>
                <p>Campaign Engagement</p>
              </div>
            </div>
          </div>
        </section>
        <GreenWaveHeadingSection
          smallText="ready for"
          bigText="big things?"
          linkText="let's talk!"
          linkOfText="#"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                  <button>SUBSCRIBE TO OUR JOURNAL</button>
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

export default InfluencerMarketing;
