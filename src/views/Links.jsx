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
      <Link to="/pressandmedia">
        12. <span>Press and Media</span>
      </Link>
      <Link to="/blog">
        13. <span>Blog Main Page</span>
      </Link>
      <Link to="/blog1">
        14. <span>Blog 1 ✅</span>
      </Link>
      <Link to="/blog2">
        15. <span>Blog 2 ✅</span>
      </Link>
      <Link to="/blog3">
        16. <span>Blog 3 ✅</span>
      </Link>
      <Link to="/blog4">
        17. <span>Blog 4 ✅</span>
      </Link>
      <Link to="/blog5">
        18. <span>Blog 5 ✅</span>
      </Link>
      <Link to="/blog6">
        19. <span>Blog 6 ✅</span>
      </Link>
      <Link to="/blog7">
        20. <span>Blog 7</span>
      </Link>
    </div>
  );
};

export default Links;
