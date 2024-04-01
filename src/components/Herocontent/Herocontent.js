import React from "react";
import "./Herocontent.css";
import { Link } from "react-router-dom";
import resume from "../assets/Suresh_frontend-developer.pdf"
const Herocontent = () => {
  return (
    <div className="heroContent">
      <div className="heroContent_container">
        <h1>Mr.Suresh</h1>
        <p>A Profrssional Web Developer</p>
        <a href={resume} download="Suresh_frontend-developer">
          <button className="heroContent_downloadbutton">  Download CV</button>
        </a>
        <Link to="/projects">
          <button className="heroContent_myworkbutton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Herocontent;
