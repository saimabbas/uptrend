import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/">
        00. <span>Links Page</span>
      </Link>
      <Link to="/home">
        01. <span>Home</span>
      </Link>
      <Link to="/influencermarketing">
        02. <span>Influencer Marketing</span>
      </Link>
      <Link to="/eventmarketing">
        03. <span>Event Marketing</span>
      </Link>
      <Link to="/metaversemarketing">
        04. <span>Metaverse Marketing</span>
      </Link>
      {/* <Link to="/talktous">
        05. <span>Talk to Us</span>
      </Link> */}
      <Link to="/uptrendgrowthstories">
        06. <span>Uptrend Growth Stories</span>
      </Link>
      <Link to="/investmentrelationships">
        07. <span>Investment Relationships</span>
      </Link>
      <Link to="/expertise">
        08. <span>Expertise</span>
      </Link>
      <Link to="/media">
        09. <span>Media</span>
      </Link>
      <Link to="/uptrendstore">
        10. <span>UpTrend Store</span>
      </Link>
      <Link to="/influencers">
        11. <span>Influencers</span>
      </Link>
    </div>
  );
};

export default Links;
