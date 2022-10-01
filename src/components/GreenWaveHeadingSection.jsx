import React, { useEffect } from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";

// Images
import BigThingsWave from "../assets/img/big-things-wave.svg";

// Components

import { gsap } from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import UTLogo from "../assets/icons/UTLogo";
import $ from "jquery";

const GreenWaveHeadingSection = (props) => {
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    ScrollSmoother,
    ScrambleTextPlugin
  );
  useEffect(() => {
    let greenWaveAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".big-things-section",
        start: "top 80%",
      },
    });
    greenWaveAnim
      .fromTo(
        ".big-things-section h2",
        {
          letterSpacing: "10px",
        },
        {
          letterSpacing: 0,
          duration: 0.4,
        }
      )
      .fromTo(
        ".big-things-section a",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
        },
        0
      );
  }, []);

  return (
    <section className="big-things-section">
      <img loading="lazy" src={BigThingsWave} alt="BigThingsWave" />
      <div>
        <h4>{props.smallText}</h4>
        <h2>{props.bigText}</h2>
        <a href={props.linkOfText}>{props.linkText}</a>
      </div>
    </section>
  );
};

export default GreenWaveHeadingSection;
