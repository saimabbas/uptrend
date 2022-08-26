import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
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

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import GreenWaveHeadingSection from "../components/GreenWaveHeadingSection";
import BackedByLogosSwiper from "../components/BackedByLogosSwiper";
const EventMarketing = () => {
  return (
    <main className="app">
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
          <img className="im-hero-img" src={EmHeroImg} alt="EmHeroImg" />
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
              <div className="sd-grid-card em-sd-grid-card-1">
                <img src={PhotoImg} alt="PhotoImg" />
                <h4>
                  We shape <b>memorable and impactful experiences</b>
                </h4>
              </div>
              <div className="sd-grid-card em-sd-grid-card-2">
                <img src={EMSD2ndImg} alt="EMSD2ndImg" />
              </div>
              <div className="sd-grid-card em-sd-grid-card-3">
                <img src={EMSD3rdImg} alt="EMSD3rdImg" />
                <h2>277%</h2>
                <h6>Organic Traffic </h6>
              </div>
              <div className="sd-grid-card em-sd-grid-card-4">
                <img src={KnotImg} alt="KnotImg" />
                <h4>Enhance attention surrounding iconic brands</h4>
                <ul>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>
                    <p>Brand Meetups </p>
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
                    <p>Web Panels</p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                      <div className="li-line"></div>
                    </div>{" "}
                    <p>Online Webinars </p>
                  </li>
                  <li>
                    <div className="li-dot-line">
                      <div className="li-dot"></div>
                    </div>{" "}
                    <p>Live Streams</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="em-events-section">
          <div className="box">
            <UpTrendsEvents />
            <div className="events-names-box">
              <div className="event-name-box">
                <img src={TrImg} alt="TrImg" />
                <p>Turkey Meetup</p>
              </div>
              <div className="event-name-box">
                <img src={ECImg} alt="ECImg" />
                <p>Ecuador Event</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="em-backed-by-section">
          <div className="box">
            <h3>Our partners are backed</h3>
            <h4>by venture capital’s elite</h4>
            <div className="em-backed-by-swiper">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={50}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo1Dark} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo2Dark} alt="BBLogo2Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo3Dark} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo4Dark} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo5Dark} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo6Dark} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section> */}
        <BackedByLogosSwiper backedByLight={true} />
        <section className="platform-stats-section">
          <div className="box">
            <div className="platform-stats-grid">
              <div className="platform-stats-details">
                <h6>Proof of Work</h6>
                <h3>LOCAL TECH STARTUP</h3>
                <h4></h4> {/* Don't remove this h4. This is for margin */}
                <h5>Delivering results-driven event marketing success</h5>
                <p>
                  We helped a local tech startup boost revenue by 64% annually
                </p>
              </div>
              <div className="platform-stats-img">
                <img src={LocalStartupImg} alt="LocalStartupImg" />
              </div>
            </div>
            <div className="platform-stats-text-grid">
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 2.3X
                </h3>
                <p>ROAs</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 64%
                </h3>
                <p>Revenue Growth</p>
              </div>
              <div className="ps-box">
                <h3>
                  <MdArrowUpward /> 448%
                </h3>
                <p>Traffic</p>
              </div>
            </div>
          </div>
        </section>

        <GreenWaveHeadingSection
          smallText="ready to start"
          bigText="a new trend?"
          linkText="let's get started!"
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
                      <p>What Is Event Marketing?</p>
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
                      <p>What Value Does Event Marketing Provide?</p>
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
                        What Is Included In Uptrend Event Marketing Services?
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
                <img src={BullElevatorImg} alt="BullElevatorImg" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default EventMarketing;