import React from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/footer.css";
import UTLogo from "../assets/icons/UTLogo";
import IconLinkedIn from "../assets/img/footer-linkedin.svg";
import IconFacebook from "../assets/img/footer-facebook.svg";
import IconInstagram from "../assets/img/footer-instagram.svg";
import IconTwitter from "../assets/img/footer-twitter.svg";
import { Link, NavLink } from "react-router-dom";

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
            <h6>
              <Link to="/expertise">Expertise</Link>
            </h6>
            <a href="/influencermarketing">Influencer Marketing</a>
            <a href="/metaversemarketing">Metaverse Promotion</a>
            <a href="/investmentrelationships">Investor Relations</a>
            <a href="/eventmarketing">Event Marketing</a>
          </div>
          <div className="footer-grid-card-3">
            <h6>Features</h6>
            <a href="/expertise">About us</a>
            <NavLink to="/pressandmedia">Press and Media</NavLink>
            <a href="/uptrendgrowthstories">Case Studies</a>
            <a href="/uptrendcareer">Careers</a>
            <a href="/events">Events</a>
            <a href="/uptrendstore">Uptrend Store</a>
            <a href="/angelsprogram">Angels Program</a>
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
                <img src={IconLinkedIn} alt="social icon" />
                {/* <IconLinkedIn color="#000" /> */}
              </a>
              <a href="https://facebook.com/UptrendAgency">
                <img src={IconFacebook} alt="social icon" />
                {/* <IconFacebook color="#000" /> */}
              </a>
              <a href="http://instagram.com/uptrendagency">
                <img src={IconInstagram} alt="social icon" />
                {/* <IconInstagram color="#000" /> */}
              </a>
              <a href="https://twitter.com/UptrendAgency">
                <img src={IconTwitter} alt="social icon" />
                {/* <IconTwitter color="#000" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
