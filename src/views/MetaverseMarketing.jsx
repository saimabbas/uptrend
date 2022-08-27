import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import MmHeroImg from "../assets/img/mm-hero-img.svg";
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
import BoyMetaverse from "../assets/img/boy-experiencing-metaverse.png";
import companyLogo14 from "../assets/img/logo-meta.svg";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import LogoDecentralized from "../assets/img/logo-decentralized.svg";
import MMSD4thImg from "../assets/img/mm-sd-4th-img.png";
import MMSD4thImg2 from "../assets/img/mm-sd-4th-img-2.svg";
import MMSD2ndImg2 from "../assets/img/mm-sd-2nd-img-2.png";
import BonsaiImg from "../assets/img/bonsai.svg";
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
import GreenWaveHeadingSection from "../components/GreenWaveHeadingSection";

const MetaverseMarketing = () => {
  return (
    <main className="app">
      <div className="metaverse-marketing-page">
        <section className="im-hero-section">
          <div className="box">
            <div className="influencer-marketing-content">
              <Header lightHeader={false} />
              <div className="im-hero-headings">
                <h1>Metaverse Marketing</h1>
                <h3>The bridge to brand success</h3>
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
            src={MmHeroImg}
            alt="MmHeroImg"
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
              <div className="sd-grid-card mm-sd-grid-card-1">
                <img loading="lazy" src={BoyMetaverse} alt="BoyMetaverse" />
                <h5>
                  Establish brands presence in the Metaverse with
                  <b>exclusive interactive experience</b>
                </h5>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-2">
                <h3>
                  <span> supporting</span>
                  leading platforms
                </h3>
                <div className="egc2-img-grid">
                  <img
                    loading="lazy"
                    src={LogoDecentralized}
                    alt="companyLogo"
                  />
                  <img loading="lazy" src={companyLogo15} alt="companyLogo" />
                </div>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-3">
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
              <div className="sd-grid-card mm-sd-grid-card-4">
                <img loading="lazy" src={MMSD4thImg} alt="MMSD4thImg" />
              </div>
            </div>
          </div>
        </section>
        <section className="service-description-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Engage With Uptrend In The Metaverse</h2>
              <a href="#" className="arrow-link">
                <span>Get Started </span>
                <MdArrowForward />
              </a>
            </div>
            <div className="service-description-grid">
              <div className="sd-grid-card mm-sd-grid-card-2-1">
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
              <div className="sd-grid-card mm-sd-grid-card-4">
                <img loading="lazy" src={MMSD2ndImg2} alt="MMSD4thImg" />
              </div>
              <div className="sd-grid-card mm-sd-grid-card-3-2">
                <img loading="lazy" src={BonsaiImg} alt="BonsaiImg" />
                <h5>
                  <b> Achieve the holistic growth</b> by integrating your
                  business in Metaverse
                </h5>
              </div>
              <div className="sd-grid-card mm-sd-grid-card-4">
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
        <section className="platform-stats-section">
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
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 217%
                </h3>
                <p>Brand Mentions</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 19 400
                </h3>
                <p>Metaverse Event Attendees</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 83%
                </h3>
                <p>Organic Traffic</p>
              </div>
            </div>
          </div>
        </section>
        <GreenWaveHeadingSection
          smallText="ready to start"
          bigText="a new trend?"
          linkText="Let's Get Started!"
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

export default MetaverseMarketing;
