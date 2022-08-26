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
import companyLogo17 from "../assets/img/logo-bitcoinist.svg";
import companyLogo18 from "../assets/img/logo-tct.svg";
import BBLogo1 from "../assets/img/backedby-logo-1.svg";
import BBLogo2 from "../assets/img/backedby-logo-2.svg";
import BBLogo3 from "../assets/img/backedby-logo-3.svg";
import BBLogo4 from "../assets/img/backedby-logo-4.svg";
import BBLogo5 from "../assets/img/backedby-logo-5.svg";
import BBLogo6 from "../assets/img/backedby-logo-6.svg";
import OurMissionImg from "../assets/img/our-mission-img.svg";
import MissionIcon1 from "../assets/img/mission-icon-1.svg";
import MissionIcon2 from "../assets/img/mission-icon-2.svg";
import MissionIcon3 from "../assets/img/mission-icon-3.svg";
import OnlineMeeting from "../assets/img/online-meeting.svg";
import MaleInfluencer from "../assets/img/male-social-media-influencer.svg";
import IconTwitterFilled from "../assets/img/icon-twitter-filled.svg";
import Nico from "../assets/img/nico.png";
import Tony from "../assets/img/tony.png";
import Danny from "../assets/img/danny.svg";
import EventImg1 from "../assets/img/event-img-1.png";
import BullElevatorImg from "../assets/img/bull-elevator-img.png";
import UTNFTImg1 from "../assets/img/ut-nft-1.png";
import UTNFTImg2 from "../assets/img/ut-nft-2.png";
import UTNFTImg3 from "../assets/img/ut-nft-3.png";
import UTNFTImg4 from "../assets/img/ut-nft-4.png";
import NFTProfileImg1 from "../assets/img/nft-profile-1.png";
import NFTProfileImg2 from "../assets/img/nft-profile-2.png";
import NFTProfileImg3 from "../assets/img/nft-profile-3.png";
import NFTProfileImg4 from "../assets/img/nft-profile-4.png";
import JournalImg1 from "../assets/img/journal-img-1.svg";
import JournalImg2 from "../assets/img/journal-img-2.svg";
import JournalImg3 from "../assets/img/journal-img-3.svg";
import JournalImg4 from "../assets/img/journal-img-4.svg";
import JournalImg5 from "../assets/img/journal-img-5.svg";
import IconDiamond from "../assets/img/icon-diamond.svg";
import StorefrontImg from "../assets/img/storefront-img.png";
import LimitedEditionImg from "../assets/img/limited-edition-img.svg";
import UtStoreWave from "../assets/img/ut-store-wave.svg";
import JournalImg from "../assets/img/journal-img.png";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import IconWhatsapp from "../assets/icons/IconWhatsapp";

// Icons
import { MdArrowForward, MdArrowDropDown } from "react-icons/md";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import { FreeMode } from "swiper";
import Footer from "../components/Footer";
import TrustedByCompanies from "../components/TrustedByCompanies";
import UpTrendsEvents from "../components/UpTrendsEvents";
import BackedByLogosSwiper from "../components/BackedByLogosSwiper";

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
          <div className="box">
            <div className="hero-content">
              <Header lightHeader={true} />
              <h1>
                LEADING MARKETING PARTNER <br /> BUILDING{" "}
                <span>BRAND IMPACT</span>
              </h1>
              <div className="hero-icons-line-box">
                <div></div>
                <a href="#">
                  <IconWhatsapp color="#fff" />
                </a>
                <a href="#">
                  <IconTwitter color="#fff" />
                </a>
                <a href="#">
                  <IconLinkedIn color="#fff" />
                </a>
                <a href="#">
                  <IconInstagram color="#fff" />
                </a>
                <a href="#">
                  <IconFacebook color="#fff" />
                </a>
              </div>
              <TrustedByCompanies trustedByLight={true} />
            </div>
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
          <div className="box box-p">
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
          <div className="box box-p">
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

                  <p>1 WEEK AGO</p>
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

                  <p>2 weeks AGO</p>
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
        {/* <section className="our-partners-section">
          <div className="box box-p">
            <h3 className="head-subhead">
              Our partners are backed <br />
              <span>by venture capital’s elite</span>
            </h3>
            <div className="bb-logos-swiper">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={100}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo1} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo2} alt="BBLogo2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo3} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo4} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo5} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img src={BBLogo6} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section> */}
        <BackedByLogosSwiper backedByLight={false} />
        <section className="highly-regarded-section">
          <div className="box box-p">
            <div className="section-heading-box">
              <h3 className="head-subhead">
                highly regarded <br />
                <span>by industry partners</span>
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
                    <img src={Nico} alt="Nico" />
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
                    <img src={Tony} alt="Tony" />
                    <div className="hrgc-head-name">
                      <h4>Tony Spilotro </h4>
                      <h6>@black.m</h6>
                    </div>
                  </div>
                  <h6>
                    I had the pleasure of working with the Uptrend team on
                    various marketing projects. The agency took my projects very
                    seriously and worked closely to achieve my unique KPIs. I
                    highly recommend them and look forward to working with
                    Uptrend on my next major project.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img src={companyLogo17} alt="companyLogo17" />
                    <div className="hrgc-head-name">
                      <h6>Bitcoinist</h6>
                      <p>Editorial Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highly-regarded-grid-card">
                <div className="hrgc-top">
                  <div className="hrgc-head">
                    <img src={Danny} alt="Danny" />
                    <div className="hrgc-head-name">
                      <h4>Danny Les </h4>
                      <h6>@black.m</h6>
                    </div>
                  </div>
                  <h6>
                    When working on more complex contracts we are often required
                    to seek external support. On many occasions we have enlisted
                    the assistance of Uptrend. We have always found them to be
                    professional and incredibly efficient and our clients are
                    always happy at the conclusion of the engagement.
                  </h6>
                </div>
                <div className="hrgc-bottom">
                  <div className="hrgc-head">
                    <img src={companyLogo18} alt="companyLogo18" />
                    <div className="hrgc-head-name">
                      <h6>Content Tap</h6>
                      <p>Founder of The Content Tap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section">
          <div className="box">
            <UpTrendsEvents />
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
                    <img src={UTNFTImg1} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={NFTProfileImg1} alt="NFTProfileImg1" />
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
                    <img src={UTNFTImg2} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={NFTProfileImg2} alt="NFTProfileImg2" />
                      <p>Dark Home</p>
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
                    <img src={UTNFTImg3} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={NFTProfileImg3} alt="NFTProfileImg3" />
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
                    <img src={UTNFTImg4} alt="UTNFTImg" />
                    <div className="nft-details">
                      <img src={NFTProfileImg4} alt="NFTProfileImg4" />
                      <p>Katty Cat</p>
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
                <img src={JournalImg1} alt="JournalImg1" />
                <div className="jgc-details">
                  <h6>
                    Working With Leading YouTube Influencers: A How To Guide
                  </h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg2} alt="JournalImg2" />
                <div className="jgc-details">
                  <h6>
                    3 Proven Strategies To Building Brand Awareness in 2022
                  </h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg3} alt="JournalImg" />
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
                <img src={JournalImg4} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>New Local Region? Tips To Get Started</h6>
                </div>
              </div>
              <div className="journal-grid-card">
                <img src={JournalImg5} alt="JournalImg" />
                <div className="jgc-details">
                  <h6>The Art of SEO: Proven Search Engine Strategies</h6>
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