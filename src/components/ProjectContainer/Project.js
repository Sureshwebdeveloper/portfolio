import React from "react";
import "./Project.css";
import Allprojects from "../All_Projects/Allprojects";
import projects from "../data/project.json";

const Project = () => {
  return (
    <section  className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <div>
        <div className="projectcontainer_projects">
          {projects.map((project) => {
            return (
              <Allprojects
                key={project.id}
                img={project.url}
                title={project.title}
                des={project.des}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
