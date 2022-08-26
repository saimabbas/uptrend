import React from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/header.css";

// Images
import IconMenu from "../assets/icons/IconMenu";
import UTLogo from "../assets/icons/UTLogo";
import BookmarkGreen from "../assets/img/bookmark-green.svg";

// Components
import Dropdown from "react-bootstrap/Dropdown";
import { MdArrowDropDown } from "react-icons/md";

const Header = (props) => {
  return (
    <header className={props.lightHeader ? "header-light" : "header-dark"}>
      <div className="header-content">
        <div className="header-left">
          {props.lightHeader ? (
            <UTLogo color="#fff" />
          ) : (
            <UTLogo color="#000" />
          )}
        </div>
        <div className="header-center">
          <div className="ut-dropdown">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Expertise <MdArrowDropDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/expertise-1">
                  Event Marketing
                </Dropdown.Item>
                <Dropdown.Item href="#/expertise-2">
                  Influencer Marketing
                </Dropdown.Item>
                <Dropdown.Item href="#/expertise-3">
                  Metaverse Marketing
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <a href="#">Results</a>
          <div className="bookmark-link">
            <img loading="lazy" src={BookmarkGreen} alt="BookmarkGreen" />
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
    </header>
  );
};

export default Header;
