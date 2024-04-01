import React from "react";
import "./NotFound.css";
import errorimg from "../src/components/assets/error-img.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="child-one">
        <img src={errorimg} alt="" className="error" />
      </div>
      <div className="child-two">
          <p className="msg">This is Not not the Web Page You Are Looking</p>
        <Link to="/">
        <button className="error-button">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
