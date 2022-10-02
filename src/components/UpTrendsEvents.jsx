import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";

// Images
import EventImg1 from "../assets/img/event-img-1.png";
import EventImg2 from "../assets/img/em2.png";
import EventImg3 from "../assets/img/em3.png";
import TrImg from "../assets/img/tr.svg";
import ECImg from "../assets/img/ec.svg";

// Icons
import { MdArrowForward } from "react-icons/md";

const UpTrendsEvents = () => {
  return (
    <div className="uptrendevent-box">
      <div className="ueg-right">
        <h3>UPTREND EVENTS</h3>
      </div>
      <div className="uptrends-events-grid">
        <div className="uptrends-events-img-grid">
          <span>Meetup</span>
          <img loading="lazy" src={EventImg1} alt="EventImg" />
          <h4>
            Meetup in Turkey <img src={TrImg} alt="" />
          </h4>
          <p>
            Our meetup attracted attention from finance influencers, business
            executives, and key industry leaders. The event was higly regarded
            by Uptrend's partners.
          </p>
        </div>
        <div className="uptrends-events-img-grid">
          <span>Meetup</span>
          <img loading="lazy" src={EventImg2} alt="EventImg" />
          <h4>
            Event in Ecuador <img src={ECImg} alt="" />
          </h4>
          <p>
            An engaging educational event was launched in Latin America,
            successfully introducing new audiences one-stop solutions in
            fintech, ecommerce, and consulting industries.
          </p>
        </div>
        <div className="uptrends-events-img-grid">
          <span>Conference</span>
          <img loading="lazy" src={EventImg3} alt="EventImg" />
          <h4>Uptrend Brand Event</h4>
          <p>
            An exclusive Uptrend brand event designed to showcase our expertise
            and introduce best-in-class marketing insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpTrendsEvents;
