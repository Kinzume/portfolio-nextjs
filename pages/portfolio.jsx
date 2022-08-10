import portfolioImg from "../public/assets/projects/portfolio-dmf.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>Personal Portfolio</h2>
          <p>Mar 2022</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This is my first personal portfolio site which I designed in Figma
            and built with HTML and CSS (no frameworks). <br /> The user can
            navigate to different sections of the page and find links to
            projects. <br /> This project was used as an opportunity to practise
            my CSS skills (Grid, Custom Properties and Resets) which I learnt
            from freecodecamp's{" "}
            <a
              href="https://www.freecodecamp.org/learn/responsive-web-design/"
              target="_blank"
              className="underline hover:text-[#93FF75]"
            >
              responsive web design course
            </a>
            , with the theme and design being inspired by{" "}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              className="underline hover:text-[#93FF75]"
            >
              Britanny Chiang
            </a>{" "}
            and{" "}
            <a
              href="https://www.lapix.jp/"
              target="_blank"
              className="underline hover:text-[#93FF75]"
            >
              Lapix
            </a>
            .
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/portfolio-dmf/"
              target="_target"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/portfolio-dmf"
              target="_target"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Code
            </a>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer hover:text-[#93FF75] w-fit">
              Back to projects
            </p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 bg-[#0F1E35] rounded-xl p-3 space-y-3">
          <p className="text-center font-bold">Technologies</p>
          <ul className="grid grid-cols-3 md:grid-cols-1 space-y-1">
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>HTML</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>CSS custom properties</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Grid</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
