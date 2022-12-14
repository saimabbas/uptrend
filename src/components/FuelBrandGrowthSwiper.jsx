import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
import BBLogo1Dark from "../assets/img/backedby-logo-1-dark.svg";
import BBLogo2Dark from "../assets/img/backedby-logo-2-dark.svg";
import BBLogo3Dark from "../assets/img/backedby-logo-3-dark.svg";
import BBLogo4Dark from "../assets/img/backedby-logo-4-dark.svg";
import BBLogo5Dark from "../assets/img/backedby-logo-5-dark.svg";
import BBLogo6Dark from "../assets/img/backedby-logo-6-dark.svg";
import BBLogo1 from "../assets/img/backedby-logo-1.svg";
import BBLogo2 from "../assets/img/backedby-logo-2.svg";
import BBLogo3 from "../assets/img/backedby-logo-3.svg";
import BBLogo4 from "../assets/img/backedby-logo-4.svg";
import BBLogo5 from "../assets/img/backedby-logo-5.svg";
import BBLogo6 from "../assets/img/backedby-logo-6.svg";
import Google from "../assets/img/google.svg";
import Facebook from "../assets/img/facebook.svg";
import Forbes from "../assets/img/forbes.svg";
import Yahoo from "../assets/img/yahoo.svg";
import Tiktok from "../assets/img/tiktok.svg";
import Salesforce from "../assets/img/salesforce.svg";
import Stream from "../assets/img/stream.svg";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

const FuelBrandGrowthSwiper = (props) => {
  return (
    <>
      {props.backedByLight ? (
        <section className="backedby-section backedby-section-light">
          <div className="box">
            <h3 className="head-subhead">
              The Partnerships and Expertise <br />
              <span>that Fuel Brand Growth</span>
            </h3>
            <div className="bb-logos-swiper">
              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
                loop={true}
                speed={2500}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Google} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Facebook} alt="BBLogo2Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Forbes} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Yahoo} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Tiktok} alt="BBLogo1Dark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Stream} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={Salesforce} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      ) : (
        <section className="backedby-section backedby-section-dark">
          <div className="box box-p">
            <h3 className="head-subhead">
              Our partners are backed <br />
              <span>by venture capital???s elite</span>
            </h3>
            <div className="bb-logos-swiper">
              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
                loop={true}
                speed={5000}
                autoplay={{
                  delay: 1,
                }}
              >
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo1} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo2} alt="BBLogo2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo3} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo4} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo5} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bb-logo-box">
                    <img loading="lazy" src={BBLogo6} alt="BBLogo1" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FuelBrandGrowthSwiper;
