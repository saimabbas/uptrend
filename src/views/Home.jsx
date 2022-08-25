import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import HeroBull from "../assets/img/hero-bull.svg";
import HeroBlueOverlay from "../assets/img/hero-blue-overlay.svg";
import companyLogo1 from "../assets/img/logo-samsung.svg";
import companyLogo2 from "../assets/img/logo-swissborg.svg";
import companyLogo3 from "../assets/img/logo-binance.svg";
import companyLogo4 from "../assets/img/logo-cointelegraphy.svg";
import companyLogo5 from "../assets/img/logo-kardiachain.svg";
import companyLogo6 from "../assets/img/logo-vechain.svg";
import companyLogo7 from "../assets/img/logo-kusama.svg";
import companyLogo8 from "../assets/img/logo-compound.svg";
import companyLogo9 from "../assets/img/logo-celsius.svg";
import companyLogo10 from "../assets/img/logo-ford.svg";
import companyLogo11 from "../assets/img/logo-citibank.svg";
import companyLogo12 from "../assets/img/logo-oracle.svg";
import companyLogo13 from "../assets/img/logo-amazon.svg";
import companyLogo14 from "../assets/img/logo-meta.svg";
import companyLogo15 from "../assets/img/logo-sandbox.svg";
import companyLogo16 from "../assets/img/logo-kephi.svg";
import OurMissionImg from "../assets/img/our-mission-img.svg";
import MissionIcon1 from "../assets/img/mission-icon-1.svg";
import MissionIcon2 from "../assets/img/mission-icon-2.svg";
import MissionIcon3 from "../assets/img/mission-icon-3.svg";
import OnlineMeeting from "../assets/img/online-meeting.svg";
import MaleInfluencer from "../assets/img/male-social-media-influencer.svg";
import IconTwitterFilled from "../assets/img/icon-twitter-filled.svg";
import PersonImgCirclular from "../assets/img/person-img-circular.png";
import EventImg from "../assets/img/event-img.png";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import UTNFTImg from "../assets/img/ut-nft.png";
import IconDiamond from "../assets/img/icon-diamond.svg";
import StorefrontImg from "../assets/img/storefront-img.png";
import LimitedEditionImg from "../assets/img/limited-edition-img.svg";
import UtStoreWave from "../assets/img/ut-store-wave.svg";
import JournalImg from "../assets/img/journal-img.png";

// Icons
import { MdArrowForward } from "react-icons/md";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import { FreeMode } from "swiper";
import Footer from "../components/Footer";
import TrustedByCompanies from "../components/TrustedByCompanies";

const Home = () => {
  return (
    <main className="app">
      <div className="home-page">
        <section className="hero-section">
          <img className="hero-bull" src={HeroBull} alt="HeroBull" />
          <img
            className="hero-blue-overlay"
            src={HeroBlueOverlay}
            alt="HeroBlueOverlay"
          />
          <div className="hero-content">
            <Header lightHeader={true} />
            <div className="box">
              <h1>
                LEADING MARKETING PARTNER <br /> BUILDING{" "}
                <span>BRAND IMPACT</span>
              </h1>
            </div>
            {/* <div className="trusted-by">
              <div className="box">
                <div className="hero-bottom">
                  <h4>
                    Trusted by Fortune 500s <br /> and startups
                  </h4>
                  <div className="hero-company-logos-swiper">
                    <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={50}
                      freeMode={true}
                      modules={[FreeMode]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo1} alt="companyLogo1" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo2} alt="companyLogo2" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo3} alt="companyLogo3" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo4} alt="companyLogo4" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo5} alt="companyLogo5" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo6} alt="companyLogo6" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo7} alt="companyLogo7" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo8} alt="companyLogo8" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo9} alt="companyLogo9" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo10} alt="companyLogo10" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo11} alt="companyLogo11" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo12} alt="companyLogo12" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hero-company-logo-box">
                          <img src={companyLogo13} alt="companyLogo13" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div> */}
            <TrustedByCompanies trustedByLight={true} />
          </div>
        </section>
        <section className="our-mission-section">
          <div className="box">
            <div className="our-mission-content">
              <div className="our-mission-left">
                <img src={OurMissionImg} alt="OurMissionImg" />
              </div>
              <div className="our-mission-right">
                <h2>Our Mission</h2>
                <div className="mission-text-img-box">
                  <img src={MissionIcon1} alt="MissionIcon1" />
                  <h5>
                    Enable <b>industry solutions</b> designed for innovators
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img src={MissionIcon2} alt="MissionIcon2" />
                  <h5>
                    Become the premier <b>marketing trendsetter</b>
                  </h5>
                </div>
                <div className="mission-text-img-box">
                  <img src={MissionIcon3} alt="MissionIcon3" />
                  <h5>
                    Leverage <b>date science</b> to deliver results{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="expertise-section">
          <div className="box">
            <h2 className="expertise-heading">Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-grid-card expertise-grid-card-1">
                <div className="egc1-top">
                  <h2>
                    Influencer <br /> <span>Marketing</span>
                  </h2>
                  <img src={MaleInfluencer} alt="MaleInfluencer" />
                </div>
                <h5>
                  #1 international content studio supported by{" "}
                  <b>120,000+ target influencers</b> in 185 countries
                </h5>
              </div>
              <div className="expertise-grid-card expertise-grid-card-2">
                <h2>
                  MetaVerse <br />
                  <span>Promotion</span>
                </h2>
                <h5>
                  Establish brand presence in the Metaverse{" "}
                  <b>with interactive experiences</b>
                </h5>
                <div className="egc2-img-grid">
                  <img src={companyLogo14} alt="companyLogo14" />
                  <img src={companyLogo15} alt="companyLogo11" />
                </div>
              </div>
              <div className="expertise-grid-card expertise-grid-card-2">
                <h2>
                  Investment <br />
                  <span>Relationships</span>
                </h2>
                <h5>
                  Uptrend Venture partners assist brands with{" "}
                  <b>scaling and growth</b>
                </h5>
                <div className="egc2-img-grid">
                  <img src={companyLogo2} alt="companyLogo14" />
                  <img src={companyLogo8} alt="companyLogo11" />
                </div>
              </div>
              <div className="expertise-grid-card expertise-grid-card-1">
                <div className="egc1-top">
                  <h2>
                    Event
                    <br /> <span>Marketing</span>
                  </h2>
                  <img src={OnlineMeeting} alt="OnlineMeeting" />
                </div>
                <h5>
                  <b>We guide brands</b> through event planning of any magnitude
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="twitter-section">
          <div className="box">
            <div className="section-heading-box">
              <div className="up-twitter-name">
                <img src={IconTwitterFilled} alt="IconTwitterFilled" />
                <p>@UptrendAgency</p>
              </div>
              <button className="ut-btn-md ut-btn-lightgray">FOLLOW</button>
            </div>
            <div className="tweets-main-grid">
              <div className="big-tweet">
                <h4>
                  🎎 Uptrend is a squad of growth leads, creatives, designers,
                  marketers, and influencers who collaborate to unlock growth
                  for iconic brands and startups.
                </h4>
                <p>12 HOURS AGO</p>
              </div>
              <div className="small-tweets-grid">
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
                <div className="small-tweets-grid-card">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎎
                    Uptrend is a squad of growth leads, creatives, designers,
                    marketers, and influencers .
                  </h6>

                  <p>12 HOURS AGO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-partners-section">
          <div className="box">
            <h3 className="head-subhead">
              Our partners are backed <br />
              <span>by venture capital’s elite</span>
            </h3>
            <div className="our-partners-logos-swiper">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={100}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo1} alt="companyLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo2} alt="companyLogo2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo3} alt="companyLogo3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo4} alt="companyLogo4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo5} alt="companyLogo5" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo6} alt="companyLogo6" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo7} alt="companyLogo7" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo8} alt="companyLogo8" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo9} alt="companyLogo9" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo10} alt="companyLogo10" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo11} alt="companyLogo11" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo12} alt="companyLogo12" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={companyLogo13} alt="companyLogo13" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="highly-regarded-section">
          <div className="box">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                Our partners are backed <br />
                <span>by venture capital’s elite</span>
              </h3>
              <a href="#" className="arrow-link">
                <span>MORE</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="highly-regarded-grid">
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                    <div className="hrgc-head-name">
                      <h4>Nico Verderosa </h4>
                      <h6>@nico1991</h6>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img src={companyLogo16} alt="companyLogo16" />
                    <div className="hrgc-head-name">
                      <h6>Kephi Gallery</h6>
                      <p>Chief Operation Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                    <div className="hrgc-head-name">
                      <h4>Nico Verderosa </h4>
                      <h6>@nico1991</h6>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img src={companyLogo16} alt="companyLogo16" />
                    <div className="hrgc-head-name">
                      <h6>Kephi Gallery</h6>
                      <p>Chief Operation Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                    <div className="hrgc-head-name">
                      <h4>Nico Verderosa </h4>
                      <h6>@nico1991</h6>
                    </div>
                  </div>
                  <h6>
                    Choosing Uptrend to handle our marketing campaign, was one
                    of the best decisions we could make. Their service was
                    really efficient and they got us a great deal with top
                    influencers.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img src={companyLogo16} alt="companyLogo16" />
                    <div className="hrgc-head-name">
                      <h6>Kephi Gallery</h6>
                      <p>Chief Operation Officer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section">
          <div className="box">
            <div className="uptrends-events-grid">
              <div className="uptrends-events-img-grid">
                <img src={EventImg} alt="EventImg" />
                <img src={EventImg} alt="EventImg" />
                <img src={EventImg} alt="EventImg" />
              </div>
              <div className="ueg-right">
                <h3>UPTREND EVENTS</h3>
                <h5>
                  Influental names gather to share <br /> insights with industry
                  innovators
                </h5>
                <a href="#" className="arrow-link">
                  <span>READ MORE </span>
                  <MdArrowForward />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ready-to-start-section">
          <div className="box">
            <div className="rts-content">
              <div className="rts-form">
                <h3>
                  Ready to start a <br /> new Uptrend?
                </h3>
                <div className="rts-form-grid">
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Company Email"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Telegram or Whatsapp"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="Website"
                  />
                  <input
                    className="ut-input"
                    type="text"
                    placeholder="How can we lend a helping hand?"
                  />
                </div>
                <button className="ut-btn-green">SEND</button>
              </div>
              <div className="bull-elevator-img-box">
                <img src={BullElevatorImg} alt="BullElevatorImg" />
              </div>
            </div>
          </div>
        </section>
        <section className="uptrend-nfts-section">
          <div className="box">
            <div className="section-heading-box">
              <div>
                <h3 className="head-subhead">Uptrend NFTs</h3>
                <p>
                  Art evokes self-expression and deep thought. We support
                  digital artists and collect exclusive NFTs that showcase our
                  ideals
                </p>
              </div>
              <a href="#" className="arrow-link">
                <span>PROMOTE YOUR NFT</span>
                <MdArrowForward />
              </a>
            </div>
            <div className="ut-nfts-swiper">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={25}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ut-nft-card">
                    <img src={UTNFTImg} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={PersonImgCirclular} alt="PersonImgCirclular" />
                      <p>Charlie Chaplin</p>
                      <h6>by John Smith</h6>
                      <span>
                        <img src={IconDiamond} alt="IconDiamond" />
                        0.023
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="ut-store-section">
          <img src={StorefrontImg} alt="StorefrontImg" />
          <div className="ut-store-details">
            <h2>UPTREND STORE</h2>
            <img src={LimitedEditionImg} alt="LimitedEditionImg" />
            <button className="ut-btn-green">SEND</button>
          </div>
          <div className="ut-store-wave-box">
            <img src={UtStoreWave} alt="UtStoreWave" />
            <h2>
              <span>OFFICE IN</span> <br />
              SANDBOX
            </h2>
            <div className="box ut-store-right-arrow">
              <a href="#">
                <MdArrowForward />
              </a>
            </div>
          </div>
        </section>
        <section className="ut-journal-section">
          <div className="box">
            <div className="heading-sublink-box">
              <h2>Uptrend Journal</h2>
              <a href="#" className="arrow-link">
                <span>READ MORE </span>
                <MdArrowForward />
              </a>
            </div>
            <div className="journal-grid">
              <div className="journal-grid-card">
                <img src={JournalImg} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>
                    Working With Leading YouTube Influencers: A How To Guide
                  </h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>
                    Working With Leading YouTube Influencers: A How To Guide
                  </h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>
                    Top 5 Influencer Marketing Software Solutions To Boost Brand
                    Growth In 2022 (Part 1)
                  </h6>
                  <p>
                    Before investing in cryptocurrency, it’s important to
                    research reputable companies that provide exchange services.
                    This will impact where you purchase crypto, how you trade,
                    and the community you will become involved in.
                  </p>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>
                    Working With Leading YouTube Influencers: A How To Guide
                  </h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>
                    Working With Leading YouTube Influencers: A How To Guide
                  </h6>
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

export default Home;
