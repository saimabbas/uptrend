import React from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/header.css";

// Images
import IconMenu from "../assets/icons/IconMenu";
import UTLogo from "../assets/icons/UTLogo";
import BookmarkGreen from "../assets/img/bookmark-green.svg";

const Header = (props) => {
  return (
    <header className={props.lightHeader ? "header-light" : "header-dark"}>
      <div className="box">
        <div className="header-content">
          <div className="header-left">
            {props.lightHeader ? (
              <UTLogo color="#fff" />
            ) : (
              <UTLogo color="#000" />
            )}
          </div>
          <div className="header-center">
            <a href="#">Expertise</a>
            <a href="#">Results</a>
            <div className="bookmark-link">
              <img src={BookmarkGreen} alt="BookmarkGreen" />
              <a href="#">Careers</a>
            </div>
            <a href="#">Events</a>
            <a href="#">Store</a>
            <a href="#">Journal</a>
            <a className="talk-to-us" href="#">
              <span>Talk To Us</span>
            </a>
          </div>
          <div className="header-right">
            <p>
              No Fluff. <b>Just Results</b>
            </p>
            <div className="menu-icon-box d-c-c">
              {props.lightHeader ? (
                <IconMenu color="#fff" />
              ) : (
                <IconMenu color="#000" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
