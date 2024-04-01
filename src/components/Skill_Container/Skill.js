import React from "react";
import "./Skill.css";
import ProgressBar from "../Progress_Bar/ProgressBar";

const Skill = () => {
  return (
    <div>
      <div id="skills" className="skillcontainer">
        <div className="skillcontainer_image">
        </div>
        <div className="skillcontainer_text">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default Skill;
