import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Images
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
import LogoSamsungDark from "../assets/img/logo-samnsung-dark.svg";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const TrustedByCompanies = (props) => {
  return (
    <div
      className={props.trustedByLight ? "trusted-by-light" : "trusted-by-dark"}
    >
      <div className="box">
        <div className="hero-bottom">
          <h4>
            Trusted by Fortune 500s <br /> and startups
          </h4>
          {props.trustedByLight ? (
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
          ) : (
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
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero-company-logo-box">
                    <img src={LogoSamsungDark} alt="LogoSamsungDark" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustedByCompanies;
