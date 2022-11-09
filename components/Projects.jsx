import React from "react";
import portfolioImg from "../public/assets/projects/portfolio-dmf.png";
import calculatorImg from "../public/assets/projects/calculator.png";
import ratingImg from "../public/assets/projects/rating-component.png";
import tourismImg from "../public/assets/projects/space-tourism.png";
import pokedexImg from "../public/assets/projects/pokedex.png";
import linkedInImg from "../public/assets/projects/linkedin-page.png";
import bootstrapImg from "../public/assets/projects/bootstrap-page.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#93FF75]">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Pokedex"
          backgroundImg={pokedexImg}
          projectDate="Sept 2022 - Nov 2022"
          projectSkillsTag={["REST APIs", "Document Object Model"]}
          projectUrl="/pokedex"
        />
        <ProjectItem
          title="LinkedIn Clone"
          backgroundImg={linkedInImg}
          projectDate="Oct 2022"
          projectSkillsTag={["React", "Redux", "Firebase"]}
          projectUrl="/linkedin-clone"
        />
        <ProjectItem
          title="Bootcamp Landing Page"
          backgroundImg={bootstrapImg}
          projectDate="Oct 2022"
          projectSkillsTag={["Bootstrap"]}
          projectUrl="/bootstrap-page"
        />
        <ProjectItem
          title="Space Tourism Website"
          backgroundImg={tourismImg}
          projectDate="May 2022 - Jun 2022"
          projectSkillsTag={["HTML", "CSS", "JavaScript"]}
          projectUrl="/tourism"
        />
        <ProjectItem
          title="Interactive Rating Component"
          backgroundImg={ratingImg}
          projectDate="Apr 2022"
          projectSkillsTag={["HTML", "CSS"]}
          projectUrl="/rating"
        />
        <ProjectItem
          title="Calculator App"
          backgroundImg={calculatorImg}
          projectDate="Apr 2022"
          projectSkillsTag={["HTML", "CSS", "JavaScript"]}
          projectUrl="/calculator"
        />
        <ProjectItem
          title="Personal Portfolio"
          backgroundImg={portfolioImg}
          projectDate="Mar 2022"
          projectSkillsTag={["HTML", "CSS"]}
          projectUrl="/portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
