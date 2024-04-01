import React from "react";
import "./Cetrificate.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import github from "../assets/github_1.png";
import figma from "../assets/figma.png";

const Cetrification = () => {
  return (
    <div name="cetrification" className="cetrificate">
      <h1 className="cetrificate_title">Cetrification</h1>
      <div className="cetrificate_container">
        <div className="cetrificates-all">
          <div className="html_css">
            <img src={html} alt="" className="html-img" />
            <img src={css} alt="" className="css-img" />
          </div>
          <h5>HTML & Css</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/6QFBUHU3A2QX">
              Cetrificate Link
            </a>
          </button>
        </div>
        <div className="cetrificates-all">
          <img src={js} alt="" />
          <h5>Javascript</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/EQQZZDPFWLDX">
              Cetrificate Link
            </a>
          </button>
        </div>
        <div className="cetrificates-all">
          <img src={react} alt="" />
          <h5>React Basic</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/Q8JR789DVWTQ">
              Cetrificate Link
            </a>
          </button>
        </div>

        {/* <div className="cetrificate_container"> */}
        <div className="cetrificates-all">
          <img src={react} alt="" />
          <h5>Advanced React</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT">
              Cetrificate Link
            </a>
          </button>
        </div>
        <div className="cetrificates-all">
          <img src={github} alt="" />
          <h5>Version Control</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT">
              Cetrificate Link
            </a>
          </button>
        </div>
        <div className="cetrificates-all figma-container">
          <img src={figma} alt="" className="figma" />
          <h5 className="cetrificate-text">Principales of Ui/Ux</h5>
          <p>
           issued by - Meta
          </p>
          <button>
            <a href="https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT">
              Cetrificate Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cetrification;
