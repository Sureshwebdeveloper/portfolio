import React, { useState } from "react";
import "./Allprojects.css";

const All_projects = ({ img, title, des, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project_content">
            <h4>{title}</h4>
            <p>{des}</p>
          </div>
        ) : (
          <img src={img} alt={img}/>
        )}
      </div>
    </a>
  );
};

export default All_projects;
// Hover Purpose Component
