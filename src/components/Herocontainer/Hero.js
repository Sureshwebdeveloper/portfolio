import React from "react";
import "./hero.css";
import Herocontent from "../Herocontent/Herocontent";
const Hero = () => {
  return (
    <div>
      <div name="about" className="hero_section">
        <Herocontent />
      </div>
    </div>
  );
};

export default Hero;
