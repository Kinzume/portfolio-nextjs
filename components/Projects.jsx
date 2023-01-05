import React from "react";
import tourismImg from "../public/assets/projects/space-tourism.png";
import pokedexImg from "../public/assets/projects/pokedex.png";
import linkedInImg from "../public/assets/projects/linkedin-page.png";
import bootstrapImg from "../public/assets/projects/bootstrap-page.png";
import ProjectItem from "./ProjectItem";
import playerSearchImg from "../public/assets/projects/XIV-API-player-character-search.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] mx-auto px-2 pt-16"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="FFXIV Player Character Search Tool"
          backgroundImg={playerSearchImg}
          projectDate="Dec 2022 - Jan 2023"
          projectSkillsTag={["REST APIs", "Document Object Model"]}
          projectUrl="/ffxiv-player-search"
        />
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
      </div>
    </div>
  );
};

export default Projects;
