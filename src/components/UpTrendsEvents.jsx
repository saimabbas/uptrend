import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/home.css";

// Images
import EventImg1 from "../assets/img/event-img-1.png";
import EventImg2 from "../assets/img/event-img-2.png";
import EventImg3 from "../assets/img/event-img-3.png";

// Icons
import { MdArrowForward } from "react-icons/md";

const UpTrendsEvents = () => {
  return (
    <div className="uptrends-events-grid">
      <div className="uptrends-events-img-grid">
        <img loading="lazy" src={EventImg1} alt="EventImg" />
        <img loading="lazy" src={EventImg2} alt="EventImg" />
        <img loading="lazy" src={EventImg3} alt="EventImg" />
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
  );
};

export default UpTrendsEvents;
