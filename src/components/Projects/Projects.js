import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div id="Projects" className=" p-10 md:px-48 text-white">
        <h1 className=" text-2xl md:text-4xl font-bold text-white ">
          
          Projects
        </h1>
        <div className="py-12 md:py-20 px-10 flex flex-wrap gap-5">
          
          <ProjectCard
            title=" Debug Entity"
            main=" This is a Agency website created in react.js and used some component library"
          />

          <ProjectCard
            title="LMTECQ"
            main=" This is a Usear Interface created in Figma and used some annimations and wirefreaming"
          />

          <ProjectCard
            title=" VCS "
            main=" This is a Usear Interface created in Figma and used some annimations and wirefreaming"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
