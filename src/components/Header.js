import {Link} from "react-router-dom"
import "./header.css";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Heder = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="header_logo">
          FrontEnd <span>Developer</span>
        </h1>
        <button className="mobile-menu" onClick={() => setMobile(!mobile)}>
          {mobile ? 
            <FiX className="toggle_menu" /> : 
            <FiMenu className="toggle_menu" />
          }
        </button>
      </div>

      <div className={mobile ? "nav-links-mobile" : "header_right"} onClick={() => setMobile(false)}>
        <Link to="/" className="nav-item" >
          <h4>Home</h4>
        </Link>
        <Link to="/skills" className="nav-item" >
          <h4>Skills</h4>
        </Link>
        <Link
          to="cetrification"
          className="nav-item"
        >
          <h4>Cetrfication</h4>
        </Link>
        <Link to="/projects" className="nav-item" >
          <h4>Projects</h4>
        </Link>
        <Link to="/contact" className="nav-item" >
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
};

export default Heder;
