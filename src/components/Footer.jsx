import React from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/footer.css";
import UTLogo from "../assets/icons/UTLogo";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-grid">
          <div className="footer-grid-card-1">
            <Link to="/">
              <UTLogo color="#31dd8c" />
            </Link>
          </div>
          <div className="footer-grid-card-2">
            <h6>Expertise</h6>
            <a href="/influencermarketing">Influencer Marketing</a>
            <a href="/metaversemarketing">Metaverse Promotion</a>
            <a href="/investmentrelationships">Investor Relations</a>
            <a href="/eventmarketing">Event Marketing</a>
          </div>
          <div className="footer-grid-card-3">
            <h6>Features</h6>
            <a href="/expertise">About us</a>
            <a href="/pressandmedia">Press and Media</a>
            <a href="/uptrendgrowthstories">Case Studies</a>
            <a href="/uptrendcareer">Careers</a>
            <a href="/events">Events</a>
            <a href="/uptrendstore">Merch</a>
            <a href="/sandbox">Office in the Sandbox</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Public Offer Agreement</a>
          </div>
          <div className="footer-grid-card-4">
            <h6>Newsletter</h6>
            <p>
              Get an exclusive marketing digest from industry growth experts
            </p>
            <div className="footer-subscribe-box">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
            <div className="footer-icons-box">
              <a href="https://www.linkedin.com/company/UptrendAgency">
                <IconLinkedIn color="#000" />
              </a>
              <a href="https://facebook.com/UptrendAgency">
                <IconFacebook color="#000" />
              </a>
              <a href="http://instagram.com/uptrendagency">
                <IconInstagram color="#000" />
              </a>
              <a href="https://twitter.com/UptrendAgency">
                <IconTwitter color="#000" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
