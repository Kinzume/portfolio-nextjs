import Image from "next/image";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#93FF75]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <ImHtmlFive2 className="m-auto" size="4rem" />
            <h3 className="flex flex-col items-center justify-center">HTML</h3>
          </div>
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <ImCss3 className="m-auto" size="4rem" />
            <h3 className="flex flex-col items-center justify-center">CSS</h3>
          </div>
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <SiJavascript className="m-auto" size="3.5rem" />
            <h3 className="flex flex-col items-center justify-center">
              JavaScript
            </h3>
          </div>
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <SiReact className="m-auto" size="3.5rem" />
            <h3 className="flex flex-col items-center justify-center">React</h3>
          </div>
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <SiTailwindcss className="m-auto" size="3.5rem" />
            <h3 className="flex flex-col items-center justify-center">
              Tailwind
            </h3>
          </div>
          <div className="p-6 bg-[#0F1E35] hover:scale-105 ease-in duration-100 grid grid-cols-2 gap-4 justify-center items-center">
            <FaGit className="m-auto" size="3rem" />
            <h3 className="flex flex-col items-center justify-center">Git</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
