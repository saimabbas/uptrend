import React from "react";

// Styles
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/marketing-views.css";

// Images
import BigThingsWave from "../assets/img/big-things-wave.svg";

const GreenWaveHeadingSection = (props) => {
  return (
    <section className="big-things-section">
      <img src={BigThingsWave} alt="BigThingsWave" />
      <div>
        <h4>{props.smallText}</h4>
        <h2>{props.bigText}</h2>
        <a href={props.linkOfText}>{props.linkText}</a>
      </div>
    </section>
  );
};

export default GreenWaveHeadingSection;
