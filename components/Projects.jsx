import React from "react";
import portfolioImg from "../public/assets/projects/portfolio-dmf.png";
import calculatorImg from "../public/assets/projects/calculator.png";
import ratingImg from "../public/assets/projects/rating-component.png";
import tourismImg from "../public/assets/projects/space-tourism.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#93FF75]">
        Projects
      </p>
      <h2 className="py-4">What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Personal Portfolio"
          backgroundImg={portfolioImg}
          projectUrl="/portfolio"
        />
        <ProjectItem
          title="Calculator App"
          backgroundImg={calculatorImg}
          projectUrl="/calculator"
        />
        <ProjectItem
          title="Interactive Rating Component"
          backgroundImg={ratingImg}
          projectUrl="/rating"
        />
        <ProjectItem
          title="Space Tourism Website"
          backgroundImg={tourismImg}
          projectUrl="/tourism"
        />
      </div>
    </div>
  );
};

export default Projects;
