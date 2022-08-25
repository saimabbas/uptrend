import React from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/footer.css";
import UTLogo from "../assets/icons/UTLogo";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-grid">
          <div className="footer-grid-card-1">
            <UTLogo color="#31dd8c" />
          </div>
          <div className="footer-grid-card-2">
            <h6>Expertise</h6>
            <a href="#">Influencer Marketing</a>
            <a href="#">Metaverse Promotion</a>
            <a href="#">Investor Relations</a>
            <a href="#">Event Marketing</a>
          </div>
          <div className="footer-grid-card-3">
            <h6>Features</h6>
            <a href="#">About us</a>
            <a href="#">Press and Media</a>
            <a href="#">Case Studies</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Merch</a>
            <a href="#">Office in the Sandbox</a>
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
              <a href="#">
                <IconLinkedIn color="#000" />
              </a>
              <a href="#">
                <IconFacebook color="#000" />
              </a>
              <a href="#">
                <IconInstagram color="#000" />
              </a>
              <a href="#">
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
