import React, { useState } from "react";

// Styles
import "../styles/globals.css";
import "../styles/components/header.css";

// Images
import IconMenu from "../assets/icons/IconMenu";
import UTLogo from "../assets/icons/UTLogo";
import BookmarkGreen from "../assets/img/bookmark-green.svg";

// Components
import Dropdown from "react-bootstrap/Dropdown";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import IconFacebook from "../assets/icons/IconFacebook";
import IconInstagram from "../assets/icons/IconInstagram";
import IconTwitter from "../assets/icons/IconTwitter";

const Header = (props) => {
  const [headerMobOpen, setHeaderMobOpen] = useState(false);
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
                  Influencer Marketing
                </Dropdown.Item>
                <Dropdown.Item href="#/expertise-2">
                  Investor Relations
                </Dropdown.Item>
                <Dropdown.Item href="#/expertise-3">
                  Metaverse Marketing
                </Dropdown.Item>
                <Dropdown.Item href="#/expertise-3">
                  Event Marketing
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
          <div className="menu-icon-box d-c-c menu-icon-box-pc">
            {props.lightHeader ? (
              <IconMenu color="#fff" />
            ) : (
              <IconMenu color="#000" />
            )}
          </div>
          <div
            className="menu-icon-box d-c-c menu-icon-box-mob"
            onClick={() => {
              setHeaderMobOpen(true);
            }}
          >
            {props.lightHeader ? (
              <IconMenu color="#fff" />
            ) : (
              <IconMenu color="#000" />
            )}
          </div>
        </div>
      </div>
      {headerMobOpen ? (
        <div className="header-mob">
          <div className="header-mob-top">
            <div className="header-mob-head">
              <UTLogo color="#fff" />
              <div
                onClick={() => {
                  setHeaderMobOpen(false);
                }}
              >
                <MdClose />
              </div>
            </div>
            <div className="header-center-mob">
              <div className="ut-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Expertise <MdArrowDropDown />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/expertise-1">
                      Influencer Marketing
                    </Dropdown.Item>
                    <Dropdown.Item href="#/expertise-2">
                      Investor Relations
                    </Dropdown.Item>
                    <Dropdown.Item href="#/expertise-3">
                      Metaverse Marketing
                    </Dropdown.Item>
                    <Dropdown.Item href="#/expertise-3">
                      Event Marketing
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <a href="#">Results</a>
              <div className="bookmark-link-mob">
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
          </div>
          <div className="header-mob-bottom">
            <button className="ut-btn-green">CONNECT YOUR BRAND</button>
            <div className="header-mob-icons-box">
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
      ) : null}
    </header>
  );
};

export default Header;
