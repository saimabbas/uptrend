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
    </div>
  );
};

export default Links;
